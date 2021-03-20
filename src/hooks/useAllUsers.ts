import {useState, useCallback} from 'react'
import axios from 'axios'

import {User} from '../types/api/user'
import {useMessage} from './useMessage'

const rootUrl = 'https://jsonplaceholder.typicode.com/users';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>([])
  const {showMessage} = useMessage()

  const fetchUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>(rootUrl).then((response) => {
      if (response.data) {
        setUsers(response.data)
      }
    }).catch((error) => {
      console.log(error)
      showMessage({title: 'unable to fetch the data', status: 'error'})
    })
    .finally(() => setLoading(false))
  }, [showMessage])
  return {fetchUsers, users, loading}
}