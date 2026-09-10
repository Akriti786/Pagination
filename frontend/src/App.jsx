import { useEffect, useState } from "react";

import UserList from "./components/UserList";
import Pagination from "./components/Pagination";

const App = () => {

    const [users, setUsers] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const response = await fetch(
                    `http://localhost:5000/api/users?page=${page}&limit=5`
                );

                const data = await response.json();

                console.log(data);

                setUsers(data.users);

                setTotalPages(
                    data.pagination.totalPages
                );

            } catch (error) {

                console.log(error);

            }

        };

        fetchUsers();

    }, [page]);


    return (
        <div>

            <h1>Users</h1>

            <UserList users={users} />

            <Pagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />

        </div>
    );
};

export default App;