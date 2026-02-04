import { ThemeProvider } from "./context/ThemeContext";
import { Navigator } from "./presentation/navigator/Navigator";

function App() {

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}


export default App;
