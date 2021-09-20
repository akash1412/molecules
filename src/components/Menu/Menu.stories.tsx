import { Meta } from '@storybook/react';

import Menu from './Menu';

export default {
	title: 'Example/Menu',
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
	return (
		<Menu>
			<Menu.Item>Sam</Menu.Item>
			<Menu.Item>Daniel</Menu.Item>
			<Menu.Item>Jones</Menu.Item>
		</Menu>
	);
};
