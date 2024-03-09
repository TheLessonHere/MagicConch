import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const EconSelector = ({
    econ,
    setEcon
}) => {
  const econOptions = ['Buy', 'Save', 'Pistol'];

  const handleChange = (event) => {
    setEcon(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="econ-selector-label">Current Econ</InputLabel>
      <Select
        labelId="econ-selector-label"
        id="econ-selector"
        value={econ}
        label="Select Econ"
        onChange={handleChange}
      >
        {econOptions.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EconSelector;