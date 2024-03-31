// Learn how to use map()
export const UserList = () => {
  const users = ['User1', 'User2', 'User3']

  return (
    <div>
      { users.map((user, index) => {
        return <h2 key={index}>{user}</h2>
      }) }
    </div>
  )
}