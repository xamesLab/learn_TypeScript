import { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
    user: IUser;
    onClick: (user:IUser)=>void;
}

const UserItem:FC<UserItemProps> =({user, onClick})=>{
    return(
        <div onClick={()=>onClick(user)}>
            {user.id}. {user.name} проживает по улице {user.address.street} в городе {user.address.city}
        </div>
    )
}

export default UserItem