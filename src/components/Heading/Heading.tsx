/** @jsxImportSource theme-ui */

import React from 'react';
import styled from '@emotion/styled';
import { useThemeUI, Themed } from 'theme-ui';

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
	as?: asType;
	fontSize?: string;
	children: React.ReactNode;
}> = props => {
	const { theme } = useThemeUI();
	const { as, fontSize, children } = props;

	return (
		<Themed.h1 as={as} sx={{ fontSize: fontSize || 1, margin: 0 }}>
			{children}
		</Themed.h1>
	);
};

export default Heading;
