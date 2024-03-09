import React from 'react';
import { maps } from '../data/maps'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MapSelector = ({
    map,
    setMap
}) => {
  const handleChange = (event) => {
    setMap(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="map-selector-label">Select Valorant Map</InputLabel>
      <Select
        labelId="map-selector-label"
        id="map-selector"
        value={map}
        label="Select Map"
        onChange={handleChange}
        sx={{
          minWidth: 200
        }}
      >
        {Object.keys(maps).map((map) => (
          <MenuItem key={map} value={maps[map]}>
            {map}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MapSelector;