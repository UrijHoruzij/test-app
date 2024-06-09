/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useMemo } from 'react';
import { PostDto } from '@/shared/dto/post.dto';
import { useFavorite } from '@/shared/providers/Favorite/useFavorite';
import HeartIcon from '@/shared/assets/HeartIcon';
import Heart2Icon from '@/shared/assets/Heart2Icon';
import styles from './styles.module.scss';

interface PostProps {
	data: PostDto;
}

const Post: FC<PostProps> = (props) => {
	const { thumbnailUrl, id, title, url, albumId } = props.data;
	const { addToFavorite, checkExistPost, removeFromFavorite, data } = useFavorite();
	const existFavorite = useMemo(() => {
		return checkExistPost(props.data);
	}, [data]);

	const handleFavorite = useCallback(() => {
		if (existFavorite) {
			removeFromFavorite(props.data);
		} else {
			addToFavorite(props.data);
		}
	}, [existFavorite]);

	return (
		<div className={styles.Post}>
			<button type="button" onClick={handleFavorite} className={styles.Post__Favorite}>
				{existFavorite ? (
					<Heart2Icon
						className={styles.Post__Favorite_Icon}
						style={{
							color: '#FF3232',
						}}
					/>
				) : (
					<HeartIcon
						className={styles.Post__Favorite_Icon}
						style={{
							color: '#999999',
						}}
					/>
				)}
			</button>
			<img className={styles.Post__Image} src={thumbnailUrl} alt={title} />
			<div className={styles.Post__Content}>
				<h6 className={styles.Post__Title}>{title}</h6>
				<p className={styles.Post__Text}>ID: {id}</p>
				<p className={styles.Post__Text}>Album ID: {albumId}</p>
				<a className={styles.Post__Link} href={url}>
					More detailed
				</a>
			</div>
		</div>
	);
};
export default Post;
