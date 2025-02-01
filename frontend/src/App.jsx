import './App.css'
import { Button } from './components/ui/button'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


function App() {

  return (
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
  )
}

export default App

