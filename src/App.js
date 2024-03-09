import React from 'react';
import { determineViableStrats, getRandomUlt, randomizeStrats } from "./data/helpers";
import SettingsToolbar from './components/SettingsToolbar';
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
} from '@mui/material';

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
    <Container maxWidth="lg" className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="div" align="center">
              The Valorant Magic Conch
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
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
                sx={{
                  maxWidth: 200
                }}
              >
                Pull the string
              </Button>
            </Box>
            <Typography variant="h3">
              {currentStrat.stratStr ? `${currentStrat.stratStr}${additionalUlt}` : ''}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
