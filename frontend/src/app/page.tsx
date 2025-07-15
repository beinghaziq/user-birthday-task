'use client';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
// import { faArrowUp } from "@fortawesome/free-regular-svg-icons";
{/* <FontAwesomeIcon icon={faArrowUp} /> */}
interface User {
  id: number;
  name: string;
  email: string;
  birthday: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentSorted, setCurrentSorted] = useState<string>('desc');

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const sort = () => {
    let sortedUsers;
    if (currentSorted === 'desc') {
      sortedUsers = users.sort((a, b) => (a.age - b.age))
      setCurrentSorted('asc')
    } else {
      sortedUsers = users.sort((a, b) => (b.age - a.age))
      setCurrentSorted('desc')
    }
    setUsers(sortedUsers)
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">ID</th>
              <th className="text-left p-3 border-b">Name</th>
              <th className="text-left p-3 border-b">Email</th>
              <th className="text-left p-3 border-b cursor-pointer" onClick={() => sort()}>Birthday</th>
              <th className="text-left p-3 border-b">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{user.id}</td>
                <td className="p-3 border-b">{user.name}</td>
                <td className="p-3 border-b">{user.email}</td>
                <td className="p-3 border-b">{user.birthday}</td>
                <td className="p-3 border-b">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
