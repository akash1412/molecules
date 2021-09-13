/** @jsxImportSource theme-ui */

import React from 'react';
import { FC } from 'react';
import Heading from '../Heading/Heading';

interface ICardProps {
	children: React.ReactNode;
	width?: string | string[];
	height?: string | string[];
}

interface ICardImageProps {
	src: string;
	alt: string;
}

const Card: React.FC<ICardProps> & {
	Image: React.FC<ICardImageProps>;
	Body: React.FC;
	Title: React.FC;
	Text: React.FC<{ children: React.ReactNode }>;
	Action: React.FC<{ children: React.ReactNode }>;
} = props => {
	return (
		<div
			sx={{
				width: props.width,
				display: 'flex',
				flexDirection: 'column',
				borderRadius: '4px',
				overflow: 'hidden',
			}}>
			{props.children}
		</div>
	);
};

const CardImage: React.FC<ICardImageProps> = props => {
	return (
		<img
			{...props}
			sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
		/>
	);
};

const CardBody = (props: any) => {
	return <div>{props.children}</div>;
};

const CardTitle: React.FC = props => {
	return <Heading fontSize='2rem'>{props.children}</Heading>;
};

const CardText: React.FC<{ children: React.ReactNode }> = props => {
	return <p>{props.children}</p>;
};
const CardAction: React.FC<{ children: React.ReactNode }> = props => {
	return <div>{props.children}</div>;
};

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Action = CardAction;
Card.Text = CardText;

export { Card };
