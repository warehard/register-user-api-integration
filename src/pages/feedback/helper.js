import axios from 'axios'


export const getUser = async (id, token) => {
  const response = await axios.get(`https://ka-users-api.herokuapp.com/users/${id}/feedbacks`, {
    headers: {
      Authorization: token
    }
  })

  return response.data
}


