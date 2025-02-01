import Home from "../src/pages/Home/Home";
import { Button } from './components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Home />
      <>
       <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
        <div className='flex min-h-screen flex-col items-center justify-center'>
          <h1>Hello HealthMate!</h1>
          <Button>Heyy there!</Button>
        </div>
      </>
      
    </div>
  );
}
export default App;


