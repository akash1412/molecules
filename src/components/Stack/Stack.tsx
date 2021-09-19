/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import React from 'react';

type IDirectionType = 'column' | 'row';

interface IStackProps {
	children?: React.ReactNode;

	/*
	  Direction of Stack
	 'default' its 'column' direction
	 */
	direction?: IDirectionType;

	/* 
	 spacing value between each element of Stack
	*/
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
	& > :not(:first-child) {
		margin-top: ${props => props.direction === 'column' && props.spacing};
		margin-left: ${props => props.direction === 'row' && props.spacing};
	}
`;

export default Stack;
