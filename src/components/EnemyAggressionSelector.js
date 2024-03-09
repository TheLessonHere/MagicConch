import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const EnemyAggressionSelector = ({
    enemyAggression,
    setEnemyAggression
}) => {

  const aggressionOptions = ['Low', 'Medium', 'High'];

  const handleChange = (event) => {
    setEnemyAggression(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="aggression-selector-label">Enemy Aggression Level</InputLabel>
      <Select
        labelId="aggression-selector-label"
        id="aggression-selector"
        value={enemyAggression}
        label="Select Aggression Level"
        onChange={handleChange}
      >
        {aggressionOptions.map((aggression) => (
          <MenuItem key={aggression} value={aggression}>
            {aggression}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EnemyAggressionSelector;