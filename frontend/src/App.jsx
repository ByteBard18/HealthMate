import Home from "../src/pages/Home/Home";
import { Button } from './components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Home />      
    </div>
  );
}
export default App;


