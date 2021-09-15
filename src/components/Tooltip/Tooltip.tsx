/** @jsxImportSource theme-ui */

import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled/macro';
import './tooltip.style.css';
interface Props {
	children: ReactNode;
	placement?: 'left' | 'top' | 'right' | 'bottom';
	content: string;
	size?: string | string[];
}

const Tooltip: FC<Props> = props => {
	const { children, placement = 'left', content, size } = props;

	return (
		<div data-tooltip={content} className='tooltip_container'>
			<div
				data-tooltip-trigger
				data-content={content}
				className='tooltip_trigger_el'>
				{children}
			</div>
		</div>
	);
};

// const ToolTipStyles = styled.div`
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

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

// & > .popup-container {
// 	position: absolute;
// 	/* display: none; */
// 	top: -25px;
// 	max-width: 250px;
// 	width: max-content;
// }
/* 
	& > [data-tooltip-trigger]:hover + div {
		 
		color: red;
	} */
// `;

// const ToolTipTriggerStyles = styled.div`;
// 	&:hover {
// 		${ToolTipStyles} {
// 			color: red;
// 		}
// 	}
// `;
export default Tooltip;
