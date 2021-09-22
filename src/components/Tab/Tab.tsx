/** @jsxImportSource theme-ui */

import { FC } from 'react';
import { Box } from 'theme-ui';
import React from 'react';

interface ITabProps {
	selected: number;
	handleSelectTab: (e: any) => void;
}

const Tabs: FC<ITabProps> & {
	Tab: FC<{ label: string }>;
} = props => {
	const childElements = React.Children.toArray(props.children).map(
		(element: any) => element.props
	);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				fontSize: '1rem',
				width: '100%',
			}}>
			<Box sx={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
				{React.Children.map(props.children, (el: any, idx) => {
					return React.cloneElement(el, {
						tabIndex: idx + 1,
						isActive: props.selected,
						handleSelectTab: props.handleSelectTab,
					});
				})}
			</Box>

			<Box py='.8rem'>
				{props.children && childElements[props.selected - 1].children}
			</Box>
		</Box>
	);
};

const Tab: FC<{
	label: string;
}> = (props: any) => {
	return (
		<li
			{...props}
			sx={{
				marginRight: '12px',
				listStyle: 'none',
				color: props.isActive === props.tabIndex ? 'secondary' : 'primary',
				borderBottom:
					props.isActive === props.tabIndex ? '1px solid secondary' : '',
			}}>
			<Box
				as='button'
				onClick={() => props.handleSelectTab(props.tabIndex)}
				sx={{
					padding: '1.2rem 0',
					fontWeight: 'bold',
					fontSize: 'inherit',
					color: 'inherit',
					backgroundColor: 'transparent',
					border: 'none',
					cursor: 'pointer',
				}}>
				{props.label}
			</Box>
		</li>
	);
};

Tabs.Tab = Tab;

export { Tabs };
