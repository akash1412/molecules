/** @jsxImportSource theme-ui */

import React from 'react';

const Card = (props: any) => {
	return <div>{props.children}</div>;
};

const CardImage = (props: any) => {
	return <img {...props} />;
};

const CardContent = (props: any) => {
	return <div>{props.children}</div>;
};

Card.Image = CardImage;
Card.Content = CardContent;

export default Card;
