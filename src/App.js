import React, { useState, useContext } from 'react';
import { Button, Input, Form, Select, Card } from 'antd';
import styles from './App.module.css';
import { UserContext } from './components';
import bg from './bg.jpg';

const App = () => {
	const [login, setLogin] = useState('');
	const [update, setUpdate] = useState(false);
	const [values, setValues] = useState({
		id: 0,
		login: '',
		password: '',
		interests: '',
	});
	const [users, updateUser, findUser] = useContext(UserContext);

	const handleUpdate = () => {
		if (update) {
			updateUser(values);
			setUpdate(false);
			setValues({
				id: 0,
				login: '',
				password: '',
				interests: '',
			});
		}
	};

	const handleChangeSearch = (e) => {
		setLogin(e.target.value);
	};
	const handleSearch = () => {
		const user = findUser(login);
		if (user) {
			setValues(user);
			setUpdate(true);
		}
		setLogin('');
	};

	const handleChangeLoginAndPassword = (e) => {
		if (update) {
			let inputName = e.target.name;
			let inputValue = e.target.value;
			let valuesCopy = Object.assign({}, values);
			valuesCopy[inputName] = inputValue;
			setValues(valuesCopy);
		}
	};
	const handleChangeInterests = (interests) => {
		if (update) {
			let valuesCopy = Object.assign({}, values);
			valuesCopy['interests'] = interests;
			setValues(valuesCopy);
		}
	};
	return (
		<div style={{ background: `url(${bg})`, backgroundSize: 'cover' }} className={styles.app}>
			<div className={styles.wrapper}>
				<Card className={styles.card}>
					<Form className={styles.form}>
						<Input
							disabled={!update}
							className={styles.space}
							name="login"
							placeholder="Логин"
							value={values.login}
							onChange={handleChangeLoginAndPassword}
						/>
						<Input
							disabled={!update}
							className={styles.space}
							name="password"
							type="password"
							placeholder="Пароль"
							value={values.password}
							onChange={handleChangeLoginAndPassword}
						/>
						<Select
							disabled={!update}
							className={styles.space}
							value={values.interests}
							placeholder="Интересы"
							name="interests"
							onChange={handleChangeInterests}
							options={[
								{ value: 'programming', label: 'Программирование' },
								{ value: 'fitness', label: 'Фитнесс' },
								{ value: 'reading', label: 'Чтение книг' },
							]}
						/>
						<Button disabled={!update} className={styles.btn} size="large" type="primary" onClick={handleUpdate}>
							Редактировать
						</Button>
					</Form>
				</Card>
				<Card className={styles.card}>
					<Form className={styles.form}>
						<div className={styles.rowForm}>
							<Input
								className={styles.space}
								name="login"
								placeholder="Логин"
								value={login}
								onChange={handleChangeSearch}
							/>
							<Button className={styles.btn} size="large" type="primary" onClick={handleSearch}>
								Поиск
							</Button>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	);
};

export default App;
