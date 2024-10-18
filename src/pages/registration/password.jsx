import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '..//..//index.css'        
import { Input } from '@mui/material';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <div className='cover' style={{border:'none'}}>
          <OutlinedInput placeholder='Enter your password' className='inputPassword' 
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  /* edge="end" */
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            }
          />
        </div>
      </div>
    </div>
  );
}
