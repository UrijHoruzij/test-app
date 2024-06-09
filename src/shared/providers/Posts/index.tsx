/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useMemo, useEffect, ReactNode } from 'react';
import { PostsContext } from './context';
import { PostDto } from '@/shared/dto/post.dto';

interface PostsProviderProps {
	children: ReactNode;
}

const PostsProvider: FC<PostsProviderProps> = (props) => {
	const [posts, setPosts] = useState<PostDto[]>([]);
	const [page, setPage] = useState<number>(1);

	const addPosts = async (data: PostDto[], page: number) => {
		setPosts([...posts, ...data]);
		setPage(page);
	};

	useEffect(() => {
		const storagePostsData = localStorage.getItem('posts');
		const storagePageData = localStorage.getItem('page');
		if (!!storagePostsData && storagePostsData !== '[]' && !!storagePageData) {
			const postsData = JSON.parse(storagePostsData);
			const pageData = JSON.parse(storagePageData);
			setPosts(postsData);
			setPage(Number(pageData));
		} else {
			localStorage.setItem('posts', JSON.stringify([posts]));
			localStorage.setItem('page', String(page));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('page', String(page));
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts, page]);

	const val = useMemo(
		() => ({
			posts: posts || [],
			page: page,
			addPosts,
		}),
		[JSON.stringify(posts)],
	);
	return <PostsContext.Provider value={val}>{props.children}</PostsContext.Provider>;
};

export default PostsProvider;
