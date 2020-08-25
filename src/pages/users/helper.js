import axios from 'axios'

export const getUsers = async (token) => {
  const response = await axios.get('https://ka-users-api.herokuapp.com/users', {
    headers: { Authorization: token }
  })

  return response.data
}
