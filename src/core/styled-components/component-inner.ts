import {Box, styled} from "@mui/material";

export const ComponentInner = styled(Box)(({theme}) => ({
  marginTop: '8px',
  padding: '10px 16px',
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows["4"],
}));