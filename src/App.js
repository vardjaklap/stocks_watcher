import MainComponent from './components/MainComponent';
import './App.css';
import React from "react";
import {createTheme} from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        mode: 'dark',
    },
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainComponent />
        </ThemeProvider>

    </div>
  );
}

export default App;
