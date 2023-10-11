import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../../models/Users"
import { getUsers } from "../../APIs/usersAPI"

interface UserState {
  users: User[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
}

export const getUsersAsync = createAsyncThunk(
  "user/getUsersAsync",
  async () => {
    return await getUsers()
  },
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload ?? []
        state.isLoading = false
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.error = action.error.message ?? ""
        state.isLoading = false
      })
  },
})

export default userSlice.reducer
