import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Input, IconButton, InputLabel, InputAdornment, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const FormControlOverride = withStyles(theme => ({
  root: {
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: theme.palette.primary.light,
    },
  },
}))(FormControl);

function InputPass(props) {

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <FormControlOverride
        className={props.className}
        error={props.error ? props.error : false}
        fullWidth
        variant={props.variant ? props.variant : "standard"}>
        <InputLabel htmlFor={`standard-adornment-password-${props.id}`}>{props.label ? props.label : 'Password'}</InputLabel>
        <Input
          id={`standard-adornment-password-${props.id}`}
          name={props.name}
          type={values.showPassword ? 'text' : 'password'}
          onChange={props.onChange ? props.onChange : null}
          disabled={props.disabled ? props.disabled : null}
          value={props.value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControlOverride>
    </>
  )
}

export default InputPass