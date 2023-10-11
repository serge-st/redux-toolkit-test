import { User } from "../models/Users"

export const getUsers = async () => {
  const response = await fetch("https://reqres.in/api/users?delay=1")
  if (response.ok) {
    return (await response.json()).data as User[]
  }
}
