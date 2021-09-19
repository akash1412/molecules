import { Meta } from '@storybook/react';
import Stack from '../../Stack/Stack';

import { Badge } from '../Badge';

export default {
	title: 'Example/Badge',
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

export const Default = () => <Badge>33</Badge>;

export const Variants = () => (
	<Stack spacing='1em'>
		<Badge>33</Badge>
		<Badge appearance='information'>4</Badge>
		<Badge appearance='success'>55</Badge>
		<Badge appearance='warning'>100</Badge>
		<Badge appearance='danger'>99999</Badge>
	</Stack>
);
