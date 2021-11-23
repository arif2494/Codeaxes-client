import React from 'react';

const User = ({ user }) => {
	const { firstName, lastName, birthDay, email, address, contactNumber, _id } = user;

	const deleteUser = (id) => {
		fetch(`http://localhost:5000/user/${id}`, {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert('User Deleted');
					window.location.reload();
				}
			});
	};

	return (
		<div className="bg-blue-500 p-4 rounded-xl text-white">
			<div className="flex flex-col items-center">
				<div className="flex">
					<p className="mr-1 text-2xl">Name: </p>
					<p className="mr-1 text-2xl">{firstName} </p>
					<p className=" text-2xl">{lastName}</p>
				</div>
				<p className=" text-xl">Birthday: {birthDay}</p>
				<p className=" text-xl">Email: {email}</p>
				<p className=" text-xl">Address: {address}</p>
				<p className=" text-xl">Number: {contactNumber}</p>
				<button className="bg-white py-2 mt-2 px-4 text-black rounded" onClick={() => deleteUser(_id)}>
					Delete This user
				</button>
			</div>
		</div>
	);
};

export default User;
