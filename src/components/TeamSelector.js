import React from 'react';
import { agents } from '../data/agents';
import {
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Box,
} from '@mui/material';

const TeamSelector = ({selectedAgents, setSelectedAgents, setPlannedUlts}) => {
  const [hasUlt, setHasUlt] = React.useState({
    agent1: false,
    agent2: false,
    agent3: false,
    agent4: false,
    agent5: false,
  })
  const agentOptions = [
    'Brimstone', 'Viper', 'Omen', 'Sova', 'Breach',
    'Cypher', 'Sage', 'Phoenix', 'Jett', 'Raze',
    'Killjoy', 'Skye', 'Yoru', 'Astra', 'Kayo'
  ];
  
  React.useEffect(() => {
    const newPlannedUlts = [];
    Object.values(hasUlt).forEach((agent, idx) => {
      if(agent){
        newPlannedUlts.push(selectedAgents[`agent${idx + 1}`])
      }
    })
    setPlannedUlts(newPlannedUlts)
  }, [selectedAgents, hasUlt, setPlannedUlts])

  const handleChange = (event, agentSlot) => {
    setSelectedAgents(prev => {
        return ({
            ...prev,
            [agentSlot]: event.target.value,
        })
    });
  };
  
  const handleUltChange = (event, agentSlot) => {
    setHasUlt(prev => ({
      ...prev,
      [agentSlot]: !prev[agentSlot]
    }))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="agent-selector-1-label">Agent 1</InputLabel>
        <Select
          labelId="agent-selector-1-label"
          id="agent-selector-1"
          value={selectedAgents.agent1}
          label="Agent 1"
          onChange={e => handleChange(e, 'agent1')}
        >
          {agentOptions.map((agent) => (
            <MenuItem key={agent} value={agent}>
              {agent}
            </MenuItem>
          ))}
        </Select>
        {selectedAgents.agent1 && agents[selectedAgents["agent1"]]?.plannedUlt && (
          <FormControlLabel
            control={
              <Checkbox
                checked={hasUlt['agent1']}
                onChange={e => handleUltChange(e, 'agent1')}
                name="hasUlt"
                color="primary"
              />
            }
            label="Has Ultimate"
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="agent-selector-2-label">Agent 2</InputLabel>
        <Select
          labelId="agent-selector-2-label"
          id="agent-selector-2"
          value={selectedAgents.agent2}
          label="Agent 2"
          onChange={e => handleChange(e, 'agent2')}
        >
          {agentOptions.map((agent) => (
            <MenuItem key={agent} value={agent}>
              {agent}
            </MenuItem>
          ))}
        </Select>
        {selectedAgents.agent2 && agents[selectedAgents["agent2"]]?.plannedUlt && (
          <FormControlLabel
            control={
              <Checkbox
                checked={hasUlt['agent2']}
                onChange={e => handleUltChange(e, 'agent2')}
                name="hasUlt"
                color="primary"
              />
            }
            label="Has Ultimate"
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="agent-selector-3-label">Agent 3</InputLabel>
        <Select
          labelId="agent-selector-3-label"
          id="agent-selector-3"
          value={selectedAgents.agent3}
          label="Agent 3"
          onChange={e => handleChange(e, 'agent3')}
        >
          {agentOptions.map((agent) => (
            <MenuItem key={agent} value={agent}>
              {agent}
            </MenuItem>
          ))}
        </Select>
        {selectedAgents.agent3 && agents[selectedAgents["agent3"]]?.plannedUlt && (
          <FormControlLabel
            control={
              <Checkbox
                checked={hasUlt['agent3']}
                onChange={e => handleUltChange(e, 'agent3')}
                name="hasUlt"
                color="primary"
              />
            }
            label="Has Ultimate"
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="agent-selector-4-label">Agent 4</InputLabel>
        <Select
          labelId="agent-selector-4-label"
          id="agent-selector-4"
          value={selectedAgents.agent4}
          label="Agent 4"
          onChange={e => handleChange(e, 'agent4')}
        >
          {agentOptions.map((agent) => (
            <MenuItem key={agent} value={agent}>
              {agent}
            </MenuItem>
          ))}
        </Select>
        {selectedAgents.agent4 && agents[selectedAgents["agent4"]]?.plannedUlt && (
          <FormControlLabel
            control={
              <Checkbox
                checked={hasUlt['agent4']}
                onChange={e => handleUltChange(e, 'agent4')}
                name="hasUlt"
                color="primary"
              />
            }
            label="Has Ultimate"
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="agent-selector-5-label">Agent 5</InputLabel>
        <Select
          labelId="agent-selector-5-label"
          id="agent-selector-5"
          value={selectedAgents.agent5}
          label="Agent 5"
          onChange={e => handleChange(e, 'agent5')}
        >
          {agentOptions.map((agent) => (
            <MenuItem key={agent} value={agent}>
              {agent}
            </MenuItem>
          ))}
        </Select>
        {selectedAgents.agent5 && agents[selectedAgents["agent5"]]?.plannedUlt && (
          <FormControlLabel
            control={
              <Checkbox
                checked={hasUlt['agent5']}
                onChange={e => handleUltChange(e, 'agent5')}
                name="hasUlt"
                color="primary"
              />
            }
            label="Has Ultimate"
          />
        )}
      </Box>
    </Box>
  );
};

export default TeamSelector;