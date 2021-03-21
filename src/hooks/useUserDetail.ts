import {useState, useCallback} from 'react'

import {User} from '../types/api/user'

type Props = {
  id: number;
  users: Array<User>;
}

export const useUserDetail = () => {
  const [user, setUser] = useState<User | null>(null) 

  const getUserDetail = useCallback((props:Props) => {
    const {id, users} = props
    const targetUser = users.find((user) => user.id === id)
    
    setUser(targetUser!)
   
  }, [])

   
  return {getUserDetail, user}
}