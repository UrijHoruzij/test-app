/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from 'ui-forest';
import List from '@/components/List';
import Post from '@/components/Post';
import Button from '@/shared/ui/Button';
import { PostDto } from '@/shared/dto/post.dto';
import { usePosts } from '@/shared/providers/Posts/usePosts';
import styles from './styles.module.scss';

const ListPage: FC = () => {
	const loaderRef = useRef(null);
	const navigate = useNavigate();
	const { posts, page, addPosts } = usePosts();

	const loadMorePosts = useCallback(async () => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
			const data = await response.json();
			addPosts(data, page + 1);
		} catch (error) {
			console.error(error);
		}
	}, [page, JSON.stringify(posts), addPosts]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const firstEntry = entries[0];
			if (firstEntry.isIntersecting) {
				loadMorePosts();
			}
		});
		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}
		return () => observer.disconnect();
	}, [loadMorePosts]);

	const handleToDashboard = () => {
		navigate('/');
	};
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column col={12}>
					<div className={styles.List__Header}>
						<h2 className={styles.List__Title}>List</h2>
						<Button onClick={handleToDashboard}>To Dashboard</Button>
					</div>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column col={12}>
					<List>
						{posts.map((post: PostDto) => (
							<Post key={post.id} data={post} />
						))}
					</List>
					<div ref={loaderRef} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
export default ListPage;
