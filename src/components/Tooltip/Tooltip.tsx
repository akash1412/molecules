/** @jsxImportSource theme-ui */

import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
	children: ReactNode;
	placement?: 'left' | 'top' | 'right' | 'bottom';
	content: string;
	size?: string | string[];
}

const Tooltip: FC<Props> = props => {
	const { children, placement = 'left', content, size } = props;

	return (
		<ToolTipStyles data-tooltip={content}>
			<div className='popup-container'>{content}</div>
			<div data-tooltip-trigger>{children}</div>
		</ToolTipStyles>
	);
};

const ToolTipStyles = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	/* &::before {
		content: attr(data-tooltip);
		background-color: #000000;
		color: #fff;
		padding: 0.5em;
		width: max-content;
		max-width: 200px;
		text-align: center;
	}
	&:hover::before {
		content: attr(data-tooltip);
	} */

	& > .popup-container {
		position: absolute;
		display: none;
		top: -25px;
		max-width: 250px;
		width: max-content;
	}

	& > [data-tooltip-trigger]:hover + .popup-container {
		display: block;
	}
`;

export default Tooltip;
