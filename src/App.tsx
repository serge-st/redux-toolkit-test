import "./App.css"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { getUsersAsync } from "./store/reducers/UserSlice"

function App() {
  const { error, isLoading, users } = useAppSelector(
    (state) => state.userReducer,
  )
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(getUsersAsync())
  }

  return (
    <div className="App">
      <h1>Users page:</h1>
      <hr />
      <h2>Data:</h2>
      <button onClick={handleClick}>Get Users</button>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <pre>{error}</pre>
        ) : (
          users.map((user) => <p key={user.id}>{user.first_name}</p>)
        )}
      </div>
    </div>
  )
}

export default App
