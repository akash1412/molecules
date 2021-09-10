/** @jsxImportSource theme-ui */

import React from 'react';
import { useThemeUI } from 'theme-ui';

const Heading: React.FC<{
	fontSize: string[] | string;
	children: React.ReactNode;
}> = props => {
	return (
		<h1
			sx={{
				fontSize: props.fontSize,
				margin: 0,
			}}>
			{props.children}
		</h1>
	);
};

export default Heading;
