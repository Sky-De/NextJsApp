import styles from '../styles/Users.module.scss';
const Users = ({ users }) => {

  return (
    <>
    <h1>Users</h1>
    <br />
    <br />
    <ul className={styles.someThing}>
        {users.map((user) => {
        return (
            <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <hr />
            </li>
        )
    })}
    </ul>
    </>

  )
}

export default Users;

export const  getStaticProps = async () => {
 
     const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await res.json();
    //  console.log(data);
     return {
         props: {
             users:data,
         },
     }
     
}