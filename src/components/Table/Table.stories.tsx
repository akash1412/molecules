import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Table } from './Table';

export default {
	title: 'Example/Table',
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

export const Basic = () => {
	return (
		<Table
			items={[
				{
					name: 'Harry Kane',
					goals: 6,
					assists: 0,
					country: '🇬🇧',
					image: 'https://twitter-avatar.now.sh/HKane',
				},
				{
					name: 'Romelu Lukaku',
					goals: 4,
					assists: 1,
					country: '🇧🇪',
					image: 'https://twitter-avatar.now.sh/Romelu_lukaku9',
				},
				{
					name: 'Antoine Griezmann',
					goals: 4,
					assists: 2,
					country: '🇫🇷',
					image: 'https://twitter-avatar.now.sh/AntoGriezmann',
				},
				{
					name: 'Ivan Perišić',
					goals: 3,
					assists: 1,
					country: '🇭🇷',
					image: 'https://twitter-avatar.now.sh/ivanperisic44',
				},
			]}>
			<Table.Column field='name' title='Name'></Table.Column>
			<Table.Column field='country' title='Country'></Table.Column>
			<Table.Column field='goals' title='Goals'></Table.Column>
			<Table.Column field='assists' title='Assists'></Table.Column>
		</Table>
	);
};
