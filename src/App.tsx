import React from 'react';
import Header from "./components/header/header";
import ChartLine from "./components/chart-line/chart-line";
import {Container, CssBaseline} from "@mui/material";
import ChartPie from "./components/chart-pie/chart-pie";

function App() {
  return (
    <>
      <CssBaseline/>
      <Container maxWidth="xl">
        <Header/>
        <ChartLine/>
        <ChartPie/>
      </Container>
    </>
  );
}

export default App;
