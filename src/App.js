import React from 'react';
import { determineViableStrats, getRandomUlt, randomizeStrats } from "./data/helpers";
import Button from '@mui/material/Button'
import SettingsToolbar from './components/SettingsToolbar';
import { Typography } from '@mui/material';

const App = () => {
  const [selectedAgents, setSelectedAgents] = React.useState({
      agent1: '',
      agent2: '',
      agent3: '',
      agent4: '',
      agent5: '',
  });
  const [map, setMap] = React.useState('');
  const [econ, setEcon] = React.useState('');
  const [plannedUlts, setPlannedUlts] = React.useState([]);
  const [enemyAggression, setEnemyAggression] = React.useState('Medium');
  const [currentStrat, setCurrentStrat] = React.useState({});
  const [additionalUlt, setAdditionalUlt] = React.useState('');

  return (
    <div className="App">
      <SettingsToolbar
        selectedAgents={selectedAgents}
        setSelectedAgents={setSelectedAgents}
        map={map}
        setMap={setMap}
        econ={econ}
        setEcon={setEcon}
        enemyAggression={enemyAggression}
        setEnemyAggression={setEnemyAggression}
        setPlannedUlts={setPlannedUlts}
      />
      <Button
        variant="contained"
        onClick={() => {
          const strat =
            randomizeStrats(
              determineViableStrats({
                team: Object.values(selectedAgents),
                map,
                econ,
                plannedUlts,
                enemyAggression
              })
            )
          setCurrentStrat(strat)
          if(econ !== 'Save' && (strat.type === 'Fast' || strat.type === 'Split' || strat.type === 'Contact Explode')) {
            const ult = getRandomUlt(plannedUlts);
            ult && setAdditionalUlt(` using ${ult} ult`)
          } else {
            setAdditionalUlt('')
          }
        }}
        disabled={
          Object.values(selectedAgents).some(agent => agent === '') ||
          !map ||
          !econ
        }
      >
        Pull the string
      </Button>
      <Typography variant="h3">
        {currentStrat.stratStr ? `${currentStrat.stratStr}${additionalUlt}` : ''}
      </Typography>
    </div>
  );
}

export default App;
