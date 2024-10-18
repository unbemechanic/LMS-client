import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const location = [
  'Andijan',
  'Bukhara',
  'Jizzah',
  'Qashqadaryo',
  'Navoi',
  'Namangan',
  'Karakalpastan',
  'Samarqand',
  'Surkhandarya',
  'Sirdaryo',
  'Toshkent',
  'Farghona',
  'Kharazm'
];

function getStyles(location, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function LocationSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          
          MenuProps={MenuProps}
        >
          {location.map((location) => (
            <MenuItem
              key={location}
              value={location}
              style={getStyles(location, personName, theme)}
            >
              {location}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export function SelectLocations (){
    return(
        <select name="" id="">
            <option value="">Namangan</option>
            <option value="">Tashkent</option>
            <option value="">Andijan</option>
            <option value="">Samarqand</option>
            <option value="">Navoi</option>
            <option value="">Surkhandaryo</option>
            <option value="">Qashqadaryo</option>
            <option value="">Qorakalpakstan</option>
            <option value="">Bukhara</option>
            <option value="">Ferghana</option>
            <option value="">Khorazm</option>
            <option value="">Sirdaryo</option>
            <option value="">Jizzah</option>
        </select>
    )
}