/** @jsxImportSource theme-ui */

import React from 'react';
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

export const Card: React.FC<ICardProps> = props => {
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

export const CardImage: React.FC<ICardImageProps> = ({ alt, src }) => {
	return (
		<img
			alt={alt}
			src={src}
			sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
		/>
	);
};

export const CardBody: React.FC = props => {
	return <div sx={{ p: '.5em' }}>{props.children}</div>;
};

export const CardTitle: React.FC<{
	fontSize?: string;
}> = ({ children, fontSize = '1.2rem' }) => {
	return <Heading fontSize={fontSize}>{children}</Heading>;
};

export const CardText: React.FC<{ children: React.ReactNode }> = props => {
	return <p>{props.children}</p>;
};
export const CardAction: React.FC<{ children: React.ReactNode }> = props => {
	return <div>{props.children}</div>;
};
