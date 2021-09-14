/** @jsxImportSource theme-ui */

import React from 'react';
import { FC } from 'react';
import Heading from '../Heading/Heading';
import { useThemeUI } from 'theme-ui';

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
	const { theme } = useThemeUI();
	console.log(theme.sizes);
	return (
		<div
			sx={{
				width: props.width,
				display: 'flex',
				flexDirection: 'column',
				borderRadius: '4px',
				overflow: 'hidden',
				border: '1px solid #ccc',
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

const CardBody: React.FC = props => {
	return <div sx={{ p: '.5em' }}>{props.children}</div>;
};

const CardTitle: React.FC = props => {
	return <Heading>{props.children}</Heading>;
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
