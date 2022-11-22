import {Button, styled} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
  padding: '7px 16px',
  color: '#fff',
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  transition: 'all .1s linear',
  cursor: 'pointer',
  textTransform: 'inherit',

  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}));
