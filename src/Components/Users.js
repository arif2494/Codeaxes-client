import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
	const [ users, setUsers ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/users').then((res) => res.json()).then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<div className="container mx-auto mb-8">
				<h2 className=" my-10 text-center text-3xl">Showing {users.length} users data</h2>
				<div className="grid grid-cols-3 gap-4">{users.map((user) => <User key={user._id} user={user} />)}</div>
			</div>
		</div>
	);
};

export default Users;
