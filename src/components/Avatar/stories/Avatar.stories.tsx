import { Meta } from '@storybook/react';

import { Avatar } from '../Avatar';
import Stack from '../../Stack/Stack';

export default {
	title: 'Example/Avatar',
	decorators: [
		(Story: any) => (
			<div
				style={{
					padding: '3em',
					display: 'grid',
					placeItems: 'center',
				}}>
				{Story()}
			</div>
		),
	],
} as Meta;

export const Default = () => {
	return <Avatar />;
};

export const WithAvatar = () => {
	return (
		<Stack direction='column' spacing='2em'>
			<Avatar
				src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6'
				name='Sarah James'
			/>
			<Avatar />
		</Stack>
	);
};

export const WithNamePlaceholder = () => {
	return <Avatar name='Sarah James' />;
};
