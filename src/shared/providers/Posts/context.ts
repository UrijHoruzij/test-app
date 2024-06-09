/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import { PostDto } from '@/shared/dto/post.dto';

type DataType = {
	posts: PostDto[];
	page: number;
	addPosts: (posts: PostDto[], page: number) => void;
};

export const PostsContext = createContext<DataType>({
	posts: [],
	page: 1,
	addPosts: () => {},
});
