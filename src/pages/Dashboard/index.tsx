import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from 'ui-forest';
import List from '@/components/List';
import Post from '@/components/Post';
import { useFavorite } from '@/shared/providers/Favorite/useFavorite';
import { PostDto } from '@/shared/dto/post.dto';
import Button from '@/shared/ui/Button';
import styles from './styles.module.scss';

const DashboardPage: FC = () => {
	const navigate = useNavigate();
	const { data } = useFavorite();
	const handleToList = () => {
		navigate('/list');
	};
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column col={12}>
					<div className={styles.Dashboard__Header}>
						<h2 className={styles.Dashboard__Title}>Dashboard</h2>
						<Button onClick={handleToList}>To List</Button>
					</div>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column col={12}>
					<List>
						{data.map((post: PostDto) => (
							<Post key={post.id} data={post} />
						))}
					</List>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
export default DashboardPage;
