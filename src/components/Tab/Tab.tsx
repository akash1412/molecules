import { FC } from 'react';
import { Box } from 'theme-ui';
import PropTypes from 'prop-types';
import React from 'react';

const Tabs: FC<{
	selected: number;
	handleSelectTab: (e: any) => void;
}> & {
	Tab: FC<{ label: string }>;
} = props => {
	const childElements = React.Children.toArray(props.children).map(
		(el: any) => el.props
	);

	console.log(childElements);

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
					const newElement = React.cloneElement(el, {
						tabIndex: idx + 1,
						isActive: props.selected,
						handleSelectTab: props.handleSelectTab,
					});

					return newElement;
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
		<Box
			as='li'
			{...props}
			paddingY='1.2rem'
			css={{
				marginRight: '12px',
				listStyle: 'none',
				color: props.isActive === props.tabIndex ? '#F3f' : '#243',
				borderBottom: props.isActive === props.tabIndex ? '1px solid #F3f' : '',
			}}>
			<Box
				as='button'
				onClick={() => props.handleSelectTab(props.tabIndex)}
				css={{
					fontWeight: 'bold',
					fontSize: 'inherit',
					color: 'inherit',
					backgroundColor: 'transparent',
					border: 'none',
					cursor: 'pointer',
				}}>
				{props.label}
			</Box>
		</Box>
	);
};

Tabs.Tab = Tab;

// Tab.propTypes = {
// 	label: PropTypes.string,
// 	tabIndex: PropTypes.number,
// 	handleTabAction: PropTypes.func,
// };

export { Tabs };
