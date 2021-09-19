/** @jsxImportSource theme-ui */

import React from 'react';

import { Themed } from 'theme-ui';

type asType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
// type sizeType =
// 	| 'xs '
// 	| 'sm'
// 	| 'md'
// 	| 'lg'
// 	| 'xl'
// 	| '2xl'
// 	| '3xl'
// 	| '4xl'
// 	| '5xl'
// 	| '6xl'
// 	| '7xl'
// 	| '8xl'
// 	| '9xl';

const Heading: React.FC<{
	/* 
	 'as' props refers to html element we want render,
	  if no 'as' prop is passed, then by default it will render 'h1' element.
	*/
	as?: asType;

	/* 
	 fontSize refers to font-size of the element
	*/
	fontSize?: string;

	children: React.ReactNode;
}> = props => {
	const { as, fontSize = 1, children } = props;

	return (
		<Themed.h1
			as={as}
			sx={{ variant: 'text.heading', fontSize: fontSize, margin: 0 }}>
			{children}
		</Themed.h1>
	);
};

export default Heading;
