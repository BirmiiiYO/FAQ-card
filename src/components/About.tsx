import { Button } from "antd"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import { IUser } from "../models/User"
import { UserAPI } from "../services/UserService"

interface UserItemProps{
  user:IUser,
  remove:(post:IUser)=> void,
  update:(post:IUser)=> void,
}

const About:FC<UserItemProps> = ({remove, update}) => {

  const {data: users, isError,isLoading} = UserAPI.useFetchAllUsersQuery(10)
  const [deletePost, {}]= UserAPI.useDeleteUserMutation()

  return (
    <div>
      <Link to="/person" >To person</Link>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Произошла ошибка</h1>}
      <ol style={{marginTop:"10vh"}}>
      {users?.map(data => <li key={data.id}>
          <img src={data.avatar_url} alt='avatar' style={{height:"100px", width:"100px"}}/>
          <span>---{data.login} ---</span>
          <span>{data.repos_url}</span>
          <span>---{data.organizations_url}---</span>
          <span>{data.type}</span>
          <Button onClick={()=>remove(data)}>Delete</Button>
        </li>)}
      </ol>
    </div>
  )
}

export default About;