import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import SubNavSide from 'src/components/SubNavSide/SubNavSide';
import SubNav from 'src/components/SubNav/SubNav';
import SampleCard from './components/SampleCard/SampleCard';
import Card2 from './components/Card2/Card2';
import { PropaneSharp } from '@mui/icons-material';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Card2 hotel="" />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
