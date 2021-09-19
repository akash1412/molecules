import { FC } from 'react';
import { Box } from 'theme-ui';
import React from 'react';

interface ITabProps {
	selected: number;
	handleSelectTab: (e: any) => void;
}

const Tabs: FC<{
	selected: number;
	handleSelectTab: (e: any) => void;
}> & {
	Tab: FC<{ label: string }>;
} = props => {

	// const {selected=1,handleSelectTab} = props
	
	// const [_selected,_setSelected] =React.useState(selected)
	
    // const _handleSelectedTab=()=>{
		 
	// }

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

export { Tabs };
