/** @jsxImportSource theme-ui */

import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
	children: ReactNode;
	placement?: 'left' | 'top' | 'right' | 'bottom';
	content: string;
	size?: string | string[];
}

const Tooltip: FC<Props> = props => {
	const { children, placement = 'left', content, size } = props;

	return <ToolTipStyles data-tooltip={content}>{children}</ToolTipStyles>;
};

const ToolTipStyles = styled.div``;

// [data-reach-tooltip] {
// 	z-index: 1;
// 	pointer-events: none;
// 	position: absolute;
// 	padding: 0.25em 0.5em;
// 	box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
// 	white-space: nowrap;
// 	font-size: 85%;
// 	background: #f0f0f0;
// 	color: #444;
// 	border: solid 1px #ccc;
// }
export default Tooltip;
