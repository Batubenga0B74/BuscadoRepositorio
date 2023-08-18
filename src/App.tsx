import { Outlet } from "react-router-dom"
import Classes from "./App.module.css";

function App() {

  return (
    <div className={Classes.app}>
      <h1>GitHub</h1>
      <Outlet/>
    </div>
  )
}
export default App
