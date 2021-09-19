import { Box } from '@theme-ui/components';
import React from 'react';
import { Button } from '../Button/Button';

interface IMenuProps {
	width?: string;
	children: React.ReactNode;
}

interface IMenuItemProps {
	children: React.ReactNode;
	icon?: React.ReactNode;
}

const Menu: React.FC<IMenuProps> & {
	Item: React.FC<IMenuItemProps>;
} = props => {
	const { width } = props;

	const [isOpen, setOpen] = React.useState(false);

	const handleOpenMenu = () => {
		setOpen(curState => !curState);
	};

	return (
		<Box sx={{ width: width || '150px' }}>
			<Button onClick={handleOpenMenu}>open</Button>
			{isOpen && (
				<Box mt='.5rem' sx={{ background: '#fff', border: '1.5px solid #ccc' }}>
					{props.children}
				</Box>
			)}
		</Box>
	);
};

const Item = (props: IMenuItemProps) => {
	const { children, icon, ...itemProps } = props;

	return (
		<Box as='li' {...itemProps} sx={{ display: 'flex' }}>
			<Box as='span' mr='.6rem'>
				{icon}
			</Box>
			{children}
		</Box>
	);
};

Menu.Item = Item;

export default Menu;
