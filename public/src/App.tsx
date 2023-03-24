import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Frame2 from 'src/components/Frame2/Frame2';
import AmlRoot from 'src/components/AmlRoot/AmlRoot';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Frame2 />} />
          <Route path="AMLInvestorinfoPersonal_info" element={<AmlRoot />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
