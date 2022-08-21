import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/woowacourse-4th-projects/">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
