import { useState } from 'react'
import './App.css'
import Button from './Button'
import Profile from './User'
import ShoppingList from './Products'
import YourButton from './MyButton'
import MyKakasButton from './SetCount';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3> Let's Dive into React</h3>
      <Button></Button>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
      <YourButton></YourButton>
      <MyKakasButton></MyKakasButton>
    </>
  )
}

export default App
