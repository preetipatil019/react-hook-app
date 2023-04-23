
import HookMemo from "./HookMemo";
import HookUseEffect from "./HookUseEffect";
import HookUseRef from "./HookUseRef";
import HookUseState from "./HookUseState";
import HookUseContext from "./HookUseContext";
import { ThemeProvider } from "./ThemeContext";

function App() {


  return (
    <>
      <div>React Hooks</div>
      <br></br>
      <HookUseState />
      <br></br>
      <br></br>
      <HookUseEffect />
      <br />
      <br />
      <HookMemo />
      <br />
      <br />
      <HookUseRef />
      <br />
      <br />
      <ThemeProvider>
    <HookUseContext />
      </ThemeProvider>

     

  </>
  );
}

export default App;
