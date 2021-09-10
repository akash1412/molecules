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
			<Menu.Item>Mia Khalifa</Menu.Item>
			<Menu.Item>Lana Rhoades</Menu.Item>
			<Menu.Item>Alura Jenson</Menu.Item>
		</Menu>
	);
};
