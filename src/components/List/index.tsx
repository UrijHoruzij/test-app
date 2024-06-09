import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ListProps {
	children?: ReactNode;
}
const List: FC<ListProps> = (props) => {
	return <div className={styles.List}>{props.children}</div>;
};
export default List;
