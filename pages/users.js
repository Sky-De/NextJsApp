
const Users = ({ users }) => {

  return (
    <>
    <h1>Users</h1>
    <br />
    <br />
    <ol>
        {users.map((user) => {
        return (
            <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <hr />
            </li>
        )
    })}
    </ol>
    </>

  )
}

export default Users;

export const  getStaticProps = async () => {
 
     const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await res.json();
     console.log(data);
     return {
         props: {
             users:data,
         },
     }
     
}