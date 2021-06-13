import axios from 'axios'
import {FC, useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router'
import { IUser } from '../types/types'

interface UserProfileParams {
    id: string;
}

const Profile:FC = ()=>{
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserProfileParams>()
    const history = useHistory()

  useEffect(() => {
    fetchUser()
  }, )

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }
    return(
        <div>
            <button onClick={()=>{history.push('/user')}}>Back</button>
            <h2>Users page</h2>
            <h4>{user?.name}</h4>
        </div>
    )
}

export default Profile