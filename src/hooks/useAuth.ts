import {useCallback, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import {User} from '../types/api/user'

const rootUrl = 'https://jsonplaceholder.typicode.com/users';

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const login = useCallback((id: string) => {
    setLoading(true)
    axios
      .get<User>(`${rootUrl}/${id}`)
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setLoading(false)
          history.push('/home')
          
        } else {
          console.log('hello')
          alert('no users matching')
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error)
        alert('no users matching. cannot login');
        setLoading(false)
      })

  }, [history])
  
  return {login, loading}

}
