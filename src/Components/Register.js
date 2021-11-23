import React, { useState } from 'react';

const Register = () => {
	const [ user, setUser ] = useState({});
	const handleInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setUser({ ...user, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('User added successfully');
					window.location.reload();
				}
			});
	};
	return (
		<div>
			<div className="container mx-auto">
				<h3 className="text-3xl text-center my-3">Register user here</h3>
				<div className="mx-auto width500 bg-gray-400">
					<form onSubmit={handleSubmit} className="flex flex-col justify-center p-4">
						<label className="text-2xl px-2" htmlFor="firstName">
							First Name
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="firstName"
							id="firstName"
						/>
						<label className="text-2xl px-2" htmlFor="lastName">
							Last Name
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="lastName"
							id="lastName"
						/>
						<label className="text-2xl px-2" htmlFor="birthDay">
							Birth Date
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="date"
							name="birthDay"
							id="birthDay"
						/>
						<label className="text-2xl px-2" htmlFor="email">
							Email
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="email"
							name="email"
							id="email"
						/>
						<label className="text-2xl px-2" htmlFor="contactNumber">
							Number
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="number"
							name="contactNumber"
							id="contactNumber"
						/>
						<label className="text-2xl px-2" htmlFor="address">
							Address
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="address"
							id="address"
						/>
						<input className="my-2 py-2 px-2 rounded-xl hover:bg-blue-200 cursor-pointer" type="submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
