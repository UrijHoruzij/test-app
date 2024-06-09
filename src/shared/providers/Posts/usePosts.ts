import { useContext } from 'react';
import { PostsContext } from './context';

export const usePosts = () => {
	const context = useContext(PostsContext);
	return { ...context };
};
