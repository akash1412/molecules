import { Meta } from '@storybook/react';
import { Button } from '../Button/Button';

import { Card } from './Card';

export default {
	title: 'Example/Card',
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
		<Card width={['300px']}>
			<Card.Image
				src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1631522950/z5u6f2p40w7jhgemz9gh.jpg'
				alt='sample'
			/>
			<Card.Body>
				<Card.Title>Heading</Card.Title>
				<Card.Text>lorem ipsum</Card.Text>
				<Card.Action>
					<Button>Go</Button>
				</Card.Action>
			</Card.Body>
		</Card>
	);
};
