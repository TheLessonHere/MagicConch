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
        <Grid container>
            <MapSelector map={map} setMap={setMap}/>
            <EconSelector econ={econ} setEcon={setEcon}/>
            <EnemyAggressionSelector enemyAggression={enemyAggression} setEnemyAggression={setEnemyAggression}/>
        </Grid>
    </Grid>
)

export default SettingsToolbar;