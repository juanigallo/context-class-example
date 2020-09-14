import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Component2 from "./components/Component2";

class App extends React.Component {
  render() {
    const mockProvider = {
      name: "Juani",
      surname: "Gallo"
    };

    return (
      <ThemeProvider value={mockProvider}>
        <p>Primer componente</p>
        <Component2 />
      </ThemeProvider>
    );
  }
}

export default App;
