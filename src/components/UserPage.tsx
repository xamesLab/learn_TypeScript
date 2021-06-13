import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'

const UserPage:FC = ()=>{
  const [users, setUsers] = useState<IUser[]>([])
  const history = useHistory()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }
    return(
        <List items = {users} renderItem = {(user: IUser) => <UserItem onClick={(user)=>history.push('/user/'+user.id)} user={user} key={user.id}/>}/>
    )
}

export default UserPage