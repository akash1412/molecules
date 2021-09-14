/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import React from 'react';

type IDirection = 'column' | 'row';

interface IStackProps {
	children?: React.ReactNode;
	direction?: IDirection;
	spacing?: string;
}

const Stack: React.FC<IStackProps> = props => {
	const { direction = 'row', ...styleProps } = props;

	return (
		<StackStyles direction={direction} {...styleProps}>
			{props.children}
		</StackStyles>
	);
};

const StackStyles = styled.div<IStackProps>`
	display: flex;
	flex-direction: ${props => props.direction};
	& > *:nth-child(2) {
		margin-top: ${props => props.direction === 'column' && props.spacing};
		margin-left: ${props => props.direction === 'row' && props.spacing};
	}
`;

export default Stack;
