import { Button } from "antd";
import { UserAPI } from "../services/UserService"

function SinglePerson() {

  const {data: users, isError,isLoading, refetch} = UserAPI.useFetchAllUsersQuery(50)
  const [createUser, {isError: createIsError, isLoading: createIsLoading}] = UserAPI.useCreateUserMutation()

  const handleCreate = async () =>{
    const title = prompt()
    await createUser({title, body:title} as any)
  }

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Произошла ошибка</h1>}
      <Button onClick={()=> refetch()} type="ghost">REFETCH</Button>
        <h1>{users ? users[0]?.login : "idi naxui"}</h1>
        <div>
        <Button type="primary" onClick={handleCreate}>Добавить пользователя</Button>
        {createIsLoading && <h1>Идет загрузка...</h1>}
      {createIsError && <h1>Произошла ошибка</h1>}
        </div>
    </div>
  )
      }

      export default SinglePerson;