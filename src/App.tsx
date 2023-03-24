import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import AmlRoot from 'src/components/AmlRoot/AmlRoot';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<AmlRoot />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
