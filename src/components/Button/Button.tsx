/** @jsxImportSource theme-ui */
import { FC, ReactNode } from 'react';

import {
	Box,
	Button as ThemeUiButton,
	ButtonProps,
	useThemeUI,
	css,
} from 'theme-ui';
import {} from 'theme-ui/';
type IVariant = 'primary' | 'secondary' | 'spotify' | 'google' | 'facebook';

interface Props extends ButtonProps {
	variant?: IVariant;

	/*  Cursor Prop  */
	cursor?: 'pointer';

	lefttIcon?: ReactNode;
	rightIcon?: ReactNode;
	iconSpacing?: string;
	width?: string | string[];
	height?: string | string[];
	isLoading?: boolean;
	loadingText?: string;
}

const Button: FC<Props> = props => {
	const { theme } = useThemeUI();

	const { lefttIcon, rightIcon: RightIcon, variant = 'default' } = props;

	console.log(variant);

	return (
		<ThemeUiButton
			{...props}
			sx={{
				width: props.height,
				height: props.height,
				cursor: props.cursor || 'pointer',
				borderRadius: variant === 'spotify' ? '100px' : '4px',
				display: 'flex',
				alignItems: 'center',
				textAlign: 'center',
				opacity: props.isLoading && '.8',
				variant: 'buttons.'+variant,
			}}>
			<Box
				sx={{
					display: props.lefttIcon || props.rightIcon ? 'block' : 'none',
					order: props.rightIcon ? 1 : -1,
					marginLeft:
						props.rightIcon && props.children && (props.iconSpacing || '.5em'),
					marginRight:
						props.lefttIcon && props.children && (props.iconSpacing || '.5em'),
				}}>
				{lefttIcon}
			</Box>
			{props.isLoading ? props.loadingText : props.children}
		</ThemeUiButton>
	);
};

export { Button };
