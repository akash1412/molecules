import { Meta } from '@storybook/react';
import { useState } from 'react';
import Heading from './Heading';
import { Box } from 'theme-ui';
import Stack from './../Stack/Stack';

export default {
	title: 'Example/Heading',
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
		<Stack direction='column' spacing='1em'>
			<Heading as='h4' fontSize='3rem'>
				This is a Heading
			</Heading>
			<Heading fontSize='2.5rem'>This is a Heading</Heading>
			<Heading fontSize='1.5'>This is a Heading</Heading>
			<Heading fontSize='1.2rem'>This is a Heading</Heading>
		</Stack>
	);
};
