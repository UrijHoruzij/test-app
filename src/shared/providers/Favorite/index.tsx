/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useMemo, useEffect, ReactNode } from 'react';
import { FavoriteContext } from './context';
import { PostDto } from '@/shared/dto/post.dto';

interface FavoriteProviderProps {
	children: ReactNode;
}

const FavoriteProvider: FC<FavoriteProviderProps> = (props) => {
	const [data, setData] = useState<PostDto[]>([]);
	const addToFavorite = async (post: PostDto) => {
		let newPost = true;
		data?.forEach((favoritePost: PostDto) => {
			if (favoritePost.id === post.id) newPost = false;
		});
		if (newPost) {
			setData((prev: PostDto[]) => [...prev, post]);
		}
	};
	const checkExistPost = (post: PostDto) => {
		let flag = false;
		data?.forEach((favoritePost: PostDto) => {
			if (favoritePost.id === post.id) flag = true;
		});
		return flag;
	};
	const removeFromFavorite = (post: PostDto) => {
		setData((prev) =>
			prev?.filter((favoritePost: PostDto) => {
				return favoritePost.id !== post.id;
			}),
		);
	};

	useEffect(() => {
		const storageData = localStorage.getItem('favorite');
		if (!!storageData && storageData !== 'null' && storageData !== '[]') {
			const favoriteData = JSON.parse(storageData);
			setData(favoriteData);
		} else {
			localStorage.setItem('favorite', JSON.stringify(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(data));
	}, [data]);

	const val = useMemo(
		() => ({
			data: data || [],
			addToFavorite,
			checkExistPost,
			removeFromFavorite,
		}),
		[JSON.stringify(data)],
	);
	return <FavoriteContext.Provider value={val}>{props.children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
