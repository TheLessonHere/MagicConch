import { strats } from "./strats"
import { agents } from "./agents"

export const adjustProbability = (strat, increment = 1) => {
    let adjustedStrat = {...strat};
    adjustedStrat.probability = adjustedStrat.probability + increment;
    return adjustedStrat
}

export const determineViableStrats = ({
    team,
    map,
    econ,
    plannedUlts,
    enemyAggression,
}) => {
    const agentsArr = team.map(agent => agents[agent]);
    const sites = map.sites > 2 ? ['A', 'B', 'C'] : ['A', 'B'];
    const specialChannel = map.specialChannel;
    let ults = [];
    let lurkers = [];
    let baseStrats = [];
    agentsArr.forEach(agent => {
        if(plannedUlts.includes(agent.name)) {
            ults.push(agent.name);
        }
        if(agent.lurk){
            lurkers.push(agent);
        }
    })
    
    if (econ === 'Buy' || econ === 'Pistol') {
        baseStrats = [strats['Rush'], strats['Default'], strats['Fake']].flat(1);
    } else {
        baseStrats = [strats['Rush'], strats['Fake']].flat(1);
    }
    
    let generatedStrats = [];
    for (let i = 0; i < sites.length; i++){
        baseStrats.forEach(strat => {
            if(generatedStrats.find(gennedStrat => gennedStrat.stratStr === 'Pure Default') && strat === 'Pure Default') {
                return
            } else {
                generatedStrats.push({
                    stratStr: `${strat}${strat !== 'Pure Default' ? sites[i] : ''}`,
                    probability: 2,
                    type: strat.trim()
                })
            }
        })
    }
    
    if (specialChannel) {
        generatedStrats.push({
            stratStr: `5 into ${specialChannel}`,
            probability: 1,
            type: "Special"
        })
    }

    const filteredStrats = generatedStrats.filter(strat => {
        let pass = true;
        if(strat.stratStr.includes('Split')) {
            switch(strat.stratStr){
                case 'Split A':
                    if(!map.splitA){
                        pass = false;
                    }
                    break
                case 'Split B':
                    if(!map.splitB){
                        pass = false;
                    }
                    break
                case 'Split C':
                    if(!map.splitC){
                        pass = false;
                    }
                    break
                default:
                    break
            }
        }
        return pass;
    });
    
    const adjustedStrats = filteredStrats.map(strat => {
        let adjustedStrat = {...strat};
        if(enemyAggression === 'High' && (adjustedStrat.type === 'Fast' || adjustedStrat.type === 'Split')){
            adjustedStrat = adjustProbability(adjustedStrat, -1);
        }
        if(enemyAggression === 'High' && (adjustedStrat.type === 'Pure Default' || adjustedStrat.type === 'Fake')){
            adjustedStrat = adjustProbability(adjustedStrat, 1);
        }
        if(enemyAggression === 'Low' && adjustedStrat.type === 'Fake'){
            adjustedStrat = adjustProbability(adjustedStrat, -1)
        }
        if(enemyAggression === 'Low' && adjustedStrat.type === 'Pure Default'){
            adjustedStrat = adjustProbability(adjustedStrat, 1)
        }
        if(econ === 'Save' && adjustedStrat.type === 'Special') {
            adjustedStrat = adjustProbability(adjustedStrat, 1)
        }
        return adjustedStrat;
    })

    return adjustedStrats;
}

export const randomizeStrats = (strats) => {
    const totalProbability = strats.reduce((sum, obj) => sum + obj.probability, 0);

    // Generate a random number within the total probability range
    const randomNum = Math.random() * totalProbability;
  
    // Iterate through the strats to find the selected strat
    let currentSum = 0;
    for (const obj of strats) {
      currentSum += obj.probability;
      if (randomNum <= currentSum) {
        return obj;
      }
    }
  
    // This should not happen, but in case of an issue, return the last object
    return strats[strats.length - 1];
}

export const getRandomUlt = (plannedUlts) => {
    if (plannedUlts.length === 0) {
      return null; // Return null if the array is empty
    }
  
    const randomIndex = Math.floor(Math.random() * plannedUlts.length);
    return plannedUlts[randomIndex];
  }