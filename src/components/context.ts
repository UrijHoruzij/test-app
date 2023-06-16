import React from 'react';
import { IUserContext } from './@types';

const UsersContext = React.createContext<IUserContext | {}>({});
export default UsersContext;
