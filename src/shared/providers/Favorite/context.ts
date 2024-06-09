/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import { PostDto } from '@/shared/dto/post.dto';

type DataType = {
	data: PostDto[];
	addToFavorite: (post: PostDto) => void;
	checkExistPost: (post: PostDto) => boolean;
	removeFromFavorite: (post: PostDto) => void;
};

export const FavoriteContext = createContext<DataType>({
	data: [],
	addToFavorite: () => {},
	checkExistPost: () => false,
	removeFromFavorite: () => {},
});
