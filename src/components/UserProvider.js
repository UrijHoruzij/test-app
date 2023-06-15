import React, { useState } from 'react';
import { UserContext } from './';

const UserProvider = (props) => {
	const [users, setUsers] = useState([
		{
			id: 1,
			login: 'admin',
			password: '123',
			interests: 'programming',
		},
		{ id: 2, login: 'Alex', password: 'alex1', interests: 'reading' },
		{ id: 3, login: 'urij', password: '123urij', interests: 'programming' },
		{ id: 4, login: 'nastya', password: 'nasty@', interests: 'fitness' },
		{ id: 5, login: 'Dmitriy', password: 'dima', interests: 'reading' },
	]);
	const findUser = (login) => {
		return users.find((user) => user.login === login);
	};
	const updateUser = (values) => {
		const newUsers = users.map((user) => (user.id === values.id ? values : user));
		setUsers(newUsers);
	};
	return <UserContext.Provider value={[users, updateUser, findUser]}>{props.children}</UserContext.Provider>;
};
export default UserProvider;
