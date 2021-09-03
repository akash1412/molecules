import { FC, ReactNode } from 'react';
import { Box, Button, ButtonProps, useThemeUI } from 'theme-ui';

interface Props extends ButtonProps {
	cursor?: 'pointer' | 'grab' | 'pointer';
	lefttIcon?: ReactNode;
	rightIcon?: ReactNode;
	iconSpacing?: string;
	width?: string | string[];
	height?: string | string[];
	isLoading?: boolean;
	loadingText?: string;
}

const ButtonCustom: FC<Props> = props => {
	const { theme } = useThemeUI();

	return (
		<Button
			{...props}
			sx={{
				width: props.height,
				height: props.height,
				color: theme.colors?.text,
				cursor: props.cursor || 'pointer',
				backgroundColor: theme.colors?.primary,
				borderRadius: 5,
				display: 'flex',
				alignItems: 'center',
				textAlign: 'center',
				opacity: props.isLoading && '.8',
			}}>
			<Box
				as='span'
				sx={{
					display: props.lefttIcon || props.rightIcon ? 'block' : 'none',
					order: props.rightIcon ? 1 : -1,
					marginLeft:
						props.rightIcon && props.children && (props.iconSpacing || '.5em'),
					marginRight:
						props.lefttIcon && props.children && (props.iconSpacing || '.5em'),
				}}>
				{props.lefttIcon || props.rightIcon}
			</Box>
			{props.isLoading ? props.loadingText : props.children}
		</Button>
	);
};

export default ButtonCustom;
