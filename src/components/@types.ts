export interface IUser {
	id: number;
	login: string;
	password: string;
	interests: string;
}
export interface IUserContext {
	users: IUser[];
	updateUser: (user: IUser) => void;
	findUser: (login: string) => IUser | undefined;
}
