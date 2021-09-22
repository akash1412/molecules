import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../../Avatar/Avatar';
import { Table } from '../Table';

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

const items = [
	{
		name: 'Romelu Lukaku',
		goals: 4,
		assists: 1,
		country: '🇧🇪',
		image: 'https://twitter-avatar.now.sh/Romelu_lukaku9',
	},
	{
		name: 'Harry Kane',
		goals: 6,
		assists: 0,
		country: '🇬🇧',
		image: 'https://twitter-avatar.now.sh/HKane',
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
];

export const Basic = () => {
	const [data, setData] = useState(items);

	return (
		<Table
			items={items}
			sortOn='assists'
			onRowClick={item => alert(item.name)}
			comparator={(a, b) => {
				return a.goals + a.assists - b.goals - b.assists;
			}}>
			<Table.Column field='name' title='Name' width='30%'>
				<Avatar />
			</Table.Column>
			<Table.Column field='country' title='Country' />
			<Table.Column field='goals' title='Goals' sortable />
			<Table.Column field='assists' title='Assists' sortable />
		</Table>
	);
};

export const EmptyData = () => {
	return (
		<Table
			items={items}
			sortOn='assists'
			onRowClick={item => alert(item.name)}
			comparator={(a, b) => {
				return a.goals + a.assists - b.goals - b.assists;
			}}
			emptyMessage='No Data Available to render'>
			<Table.Column field='name' title='Name'></Table.Column>
			<Table.Column field='country' title='Country'></Table.Column>
			<Table.Column field='goals' title='Goals' sortable />
			<Table.Column field='assists' title='Assists' sortable />
		</Table>
	);
};

export const LoadingState = () => {
	return (
		<Table
			isLoading
			items={items}
			sortOn='assists'
			onRowClick={item => alert(item.name)}
			comparator={(a, b) => {
				return a.goals + a.assists - b.goals - b.assists;
			}}>
			<Table.Column field='name' title='Name'>
				
			</Table.Column>
			<Table.Column field='country' title='Country'>
		
			</Table.Column>
			<Table.Column field='goals' title='Goals' sortable />
			<Table.Column field='assists' title='Assists' sortable />
		</Table>
	);
};
