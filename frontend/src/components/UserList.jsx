// const UserList = ({ users }) => {

//     return (
//         <div>

//             {users.map((user) => (

//                 <div key={user._id}>

//                     <h3>{user.name}</h3>

//                     <p>{user.email}</p>

//                     <p>Age: {user.age}</p>

//                     <hr />

//                 </div>

//             ))}

//         </div>
//     );
// };

// export default UserList;






const UserList = ({ users }) => {

    return (
        <div>

            {users.length === 0 ? (

                <p>No users found</p>

            ) : (

                users.map((user) => (

                    <div key={user._id}>

                        <h3>{user.name}</h3>

                        <p>{user.email}</p>

                        <p>Age: {user.age}</p>

                        <hr />

                    </div>

                ))

            )}

        </div>
    );
};

export default UserList;