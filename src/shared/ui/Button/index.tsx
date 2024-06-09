import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string | ReactNode;
	onClick?: () => void;
	className?: string;
}

const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			className={[styles.Button, props.className].join(' ')}
			onClick={props.onClick}
			type={props.type || 'button'}>
			{props.children}
		</button>
	);
};
export default Button;
