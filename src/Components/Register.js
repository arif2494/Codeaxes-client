import React, { useState } from 'react';
const Register = () => {
	const [ user, setUser ] = useState({});
	const [ isValid, setIsValid ] = useState(false);
	const [ emailMessage, setEmailMessage ] = useState('');
	const [ firstMessage, setFirstMessage ] = useState('');
	const [ lastMessage, setLastMessage ] = useState('');
	const [ numberMessage, setNumberMessage ] = useState('');
	// name validation
	const nameRegex = /^.{2,}$/;
	const validateFirstName = (event) => {
		const name = event.target.value;
		if (nameRegex.test(name)) {
			setIsValid(true);
			setFirstMessage('');
		} else {
			setIsValid(false);
			setFirstMessage('Please enter at least 2 letter');
		}
	};
	// last name
	const validateLastName = (event) => {
		const name = event.target.value;
		if (nameRegex.test(name)) {
			setIsValid(true);
			setLastMessage('');
		} else {
			setIsValid(false);
			setLastMessage('Please enter at least 2 letter');
		}
	};
	// email validation
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const validateEmail = (event) => {
		const email = event.target.value;
		if (emailRegex.test(email)) {
			setIsValid(true);
			setEmailMessage('');
		} else {
			setIsValid(false);
			setEmailMessage('Please enter a valid email!');
		}
	};
	// number validation
	const numberRegex = /^.{10,}$/;
	const validateNumber = (event) => {
		const number = event.target.value;
		if (numberRegex.test(number)) {
			setIsValid(true);
			setNumberMessage('');
		} else {
			setIsValid(false);
			setNumberMessage('Please enter at least 10 number');
		}
	};
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
							onChange={validateFirstName}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="firstName"
							id="firstName"
							required
						/>
						<p className="text-red-800">{firstMessage}</p>
						<label className="text-2xl px-2" htmlFor="lastName">
							Last Name
						</label>
						<input
							onBlur={handleInput}
							onChange={validateLastName}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="lastName"
							id="lastName"
							required
						/>
						<p className="text-red-800">{lastMessage}</p>
						<label className="text-2xl px-2" htmlFor="birthDay">
							Birth Date
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="date"
							name="birthDay"
							id="birthDay"
							required
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
							onChange={validateEmail}
							required
						/>
						<p className="text-red-800">{emailMessage}</p>
						<label className="text-2xl px-2" htmlFor="contactNumber">
							Number
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="number"
							name="contactNumber"
							onChange={validateNumber}
							id="contactNumber"
							required
						/>
						<p className="text-red-800">{numberMessage}</p>
						<label className="text-2xl px-2" htmlFor="address">
							Address
						</label>
						<input
							onBlur={handleInput}
							className="my-2 py-3 px-2 rounded-xl"
							type="text"
							name="address"
							id="address"
							required
						/>
						{isValid ? (
							<input
								className="my-2 py-2 px-2 rounded-xl bg-blue-400 hover:bg-blue-600 cursor-pointer"
								type="submit"
							/>
						) : (
							<button
								className="my-2 py-2 px-2 rounded-xl bg-blue-400 hover:bg-blue-600 cursor-not-allowed"
								disabled
							>
								Submit
							</button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
