import "./App.css"
import { useAppDispatch, useAppSelector } from "./store/hooks"

import { userSlice } from "./store/reducers/UserSlice"

function App() {
  const { count } = useAppSelector((state) => state.userReducer)
  const { increment } = userSlice.actions
  const dispatch = useAppDispatch()

  console.log(increment(1))

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment(3))}>Increment</button>
    </div>
  )
}

export default App
