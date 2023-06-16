import React, { useState, useContext, ChangeEvent } from 'react';
import { Button, Input, Form, Select, Card } from 'antd';
import styles from './App.module.css';
import { UserContext } from './components';
import { IUser, IUserContext } from './components/@types';
import bg from './bg.jpg';

const App = () => {
	const [login, setLogin] = useState<string>('');
	const [update, setUpdate] = useState<boolean>(false);
	const [values, setValues] = useState<IUser>({
		id: 0,
		login: '',
		password: '',
		interests: '',
	});
	const { updateUser, findUser } = useContext(UserContext) as IUserContext;
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

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
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

	const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
		if (update) {
			let inputValue = e.target.value;
			let valuesCopy: IUser = Object.assign({}, values);
			valuesCopy['login'] = inputValue;
			setValues(valuesCopy);
		}
	};
	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		if (update) {
			let inputValue = e.target.value;
			let valuesCopy: IUser = Object.assign({}, values);
			valuesCopy['password'] = inputValue;
			setValues(valuesCopy);
		}
	};
	const handleChangeInterests = (interests: string) => {
		if (update) {
			let valuesCopy: IUser = Object.assign({}, values);
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
							onChange={handleChangeLogin}
						/>
						<Input
							disabled={!update}
							className={styles.space}
							name="password"
							type="password"
							placeholder="Пароль"
							value={values.password}
							onChange={handleChangePassword}
						/>
						<Select
							disabled={!update}
							className={styles.space}
							value={values.interests}
							placeholder="Интересы"
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
