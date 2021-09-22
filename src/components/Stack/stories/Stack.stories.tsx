import { Meta } from '@storybook/react';
import Stack from '../Stack';
import { Button } from '../../Button/Button';

export default {
	title: 'Example/Stack',
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

export const HStack = () => {
	return (
		<Stack direction='column'>
			<Button>button 1</Button>
			<Button>button 1</Button>
			<Button>button 1</Button>
		</Stack>
	);
};

export const VStack = () => {
	return (
		<Stack direction='row'>
			<Button>button 1</Button>
			<Button>button 1</Button>
			<Button>button 1</Button>
		</Stack>
	);
};
