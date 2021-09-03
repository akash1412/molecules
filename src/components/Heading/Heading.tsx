import React from 'react';
import styled from '@emotion/styled';

import { Box } from '@theme-ui/components';

import { theme } from './../../theme';

const Heading: React.FC<{
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = props => {
	return (
		<Box
			as={`${props.as}`}
			sx={{
				fontSize: [3, 5, theme.fontSizes[8]],
				fontFamily: theme.fonts.heading,
			}}>
			{props.children}
		</Box>
	);
};

const Text = styled.text({});

export default Heading;
