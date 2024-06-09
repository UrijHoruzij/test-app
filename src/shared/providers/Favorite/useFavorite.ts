import { useContext } from 'react';
import { FavoriteContext } from './context';

export const useFavorite = () => {
	const context = useContext(FavoriteContext);
	return { ...context };
};
