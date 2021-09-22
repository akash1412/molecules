/** @jsxImportSource theme-ui */
import { FC, ReactNode } from 'react';

import { Button as ThemeUIButton, ButtonProps, useThemeUI } from 'theme-ui';
import ButtonIcon from './components/ButtonIcon';

type IBackgroundColorType = 'primary' | 'secondary';

type IVariant = 'spotify' | 'google' | 'facebook';

type ISize = 'xs' | 'sm' | 'md' | 'lg';

interface Props extends ButtonProps {
	variant?: IVariant;
	bgColor?: IBackgroundColorType;
	lefttIcon?: ReactNode;
	rightIcon?: ReactNode;
	iconSpacing?: string;
	width?: string | string[];
	height?: string | string[];
	size?: ISize;
	isLoading?: boolean;
	loadingText?: string;
	onClick?: () => void;
}

const Button: FC<Props> = props => {
	const { theme } = useThemeUI();

	const {
		lefttIcon,
		rightIcon,
		iconSpacing,
		variant = 'default',
		size = 'md',
		bgColor,
		width,
		height,
	} = props;

	return (
		<ThemeUIButton
			{...props}
			sx={{
				width: width,
				height: height || (theme?.buttons && theme.buttons.sizes[size]),
				padding: size && theme.buttons.padding[size],
				cursor: 'pointer',
				backgroundColor: bgColor,
				borderRadius: variant === 'spotify' ? '100px' : '4px',
				display: 'flex',
				alignItems: 'center',
				textAlign: 'center',
				opacity: props.isLoading && '.8',
				variant: 'buttons.' + variant,
			}}>
			<ButtonIcon
				lefttIcon={lefttIcon}
				rightIcon={rightIcon}
				iconSpacing={iconSpacing || '.5em'}
			/>
			{props.isLoading ? props.loadingText : props.children}
		</ThemeUIButton>
	);
};

export { Button };
