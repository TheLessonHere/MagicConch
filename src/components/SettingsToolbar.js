import React from 'react';
import EconSelector from './EconSelector';
import EnemyAggressionSelector from './EnemyAggressionSelector';
import MapSelector from './MapSelector';
import TeamSelector from './TeamSelector';
import Grid from '@mui/material/Grid'

const SettingsToolbar = ({
    selectedAgents,
    setSelectedAgents,
    setPlannedUlts,
    map,
    setMap,
    econ,
    setEcon,
    enemyAggression,
    setEnemyAggression,
}) => (
    <Grid container>
        <Grid container>
            <TeamSelector
                selectedAgents={selectedAgents}
                setSelectedAgents={setSelectedAgents}
                setPlannedUlts={setPlannedUlts}
            />
        </Grid>
        <Grid container sx={{ mb: 3 }}>
            <Grid item container sx={{ justifyContent: 'center' }} xs={4}>
                <MapSelector map={map} setMap={setMap}/>
            </Grid>
            <Grid item container sx={{ justifyContent: 'center' }} xs={4}>
                <EconSelector econ={econ} setEcon={setEcon}/>
            </Grid>
            <Grid item container sx={{ justifyContent: 'center' }} xs={4}>
                <EnemyAggressionSelector
                    enemyAggression={enemyAggression}
                    setEnemyAggression={setEnemyAggression}
                />
            </Grid>
        </Grid>
    </Grid>
)

export default SettingsToolbar;