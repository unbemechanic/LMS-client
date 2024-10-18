import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language'; // Import the globe icon

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function SelectLang() {
  const [language, setLanguage] = React.useState(''); // Change state variable name

  const handleChange = (event) => {
    setLanguage(event.target.value); // Update state variable
  };

  return (
    <div>
      <Select sx={{display:'flex', alignItems:'center'}}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={language} // Use the updated state variable
        onChange={handleChange}
        input={<BootstrapInput />}
        displayEmpty
        renderValue={(selected) => (
          <>
            <LanguageIcon style={{ marginRight: 1 }} /> {/* Language icon */}
            {selected || 'ENG'} {/* Display selected language or "ENG" */}
          </>
        )}
      >
        <MenuItem value="ENG">ENG</MenuItem>
        <MenuItem value="Russian">RUS</MenuItem>
        <MenuItem value="Uzbek">UZB</MenuItem>
      </Select>
    </div>
  );
}
