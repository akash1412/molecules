import { Meta } from '@storybook/react';
import { Avatar } from '../../Avatar/Avatar';
import { Button } from '../../Button/Button';

import {
	Card,
	CardBody,
	CardImage,
	CardTitle,
	CardText,
	CardAction,
} from '../Card';

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

export const ProductCard = () => {
	return (
		<Card width={['300px']}>
			<CardImage
				src='https://res.cloudinary.com/dhqp2dd6b/image/upload/v1631522950/z5u6f2p40w7jhgemz9gh.jpg'
				alt='sample'
			/>
			<CardBody>
				<CardTitle>Card title</CardTitle>
				<CardText>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</CardText>
				<CardAction>
					<Button>Go Somewhere</Button>
				</CardAction>
			</CardBody>
		</Card>
	);
};
