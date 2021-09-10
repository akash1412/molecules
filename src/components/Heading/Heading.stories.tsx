import { Meta } from '@storybook/react';
import { useState } from 'react';
import Heading from './Heading';
import { Box } from 'theme-ui';

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
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Heading fontSize='36px'>This is a Heading</Heading>
			<Heading fontSize='24px'>This is a Heading</Heading>
			<Heading fontSize='18px'>This is a Heading</Heading>
			<Heading fontSize='14px'>This is a Heading</Heading>
		</Box>
	);
};
