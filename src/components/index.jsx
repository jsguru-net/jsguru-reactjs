import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const AppBoxStyles = {
  p: 2,
  border: '1px solid grey',
};
const AppBox = (props) => (
  <Box
    sx={{
      ...AppBoxStyles,
      ...props.sx,
    }}
  >
    {props.title && (
      <Box>
        <h1>{props.title}</h1>
      </Box>
    )}
    <Box>{props.children}</Box>
  </Box>
);
const ButtonPrimary = (props) => (
  <Button {...props} variant="contained">
    {props.children}
  </Button>
);

export {
  // Layout
  Grid,
  // Form Fields
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  // Buttons
  ButtonPrimary,
  // Others
  AppBox,
};
