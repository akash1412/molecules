import styled from '@emotion/styled/macro';

export const CheckboxContainer = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const HiddenCheckbox = styled.input`
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
	pointer-events: fill;
`;

export const Icon = styled.svg<{ isDisabled?: boolean }>`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

export const StyledCheckbox = styled.div<{
	checked: boolean;
	isDisabled?: boolean;
}>`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
	background: ${props => props.isDisabled && '#E2E8F0'};
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}

	${Icon} {
		visibility: ${props => (props.checked ? 'visible' : 'hidden')};
	}
`;
