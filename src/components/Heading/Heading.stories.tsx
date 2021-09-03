import { Meta } from '@storybook/react';
import { useState } from 'react';
import Head from './Heading';

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

export const Heading = () => {
	return <Head as='h1'>Heading</Head>;
};
