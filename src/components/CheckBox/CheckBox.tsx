/** @jsxImportSource theme-ui */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/react';

import styled from '@emotion/styled/macro';
import '@emotion/styled/base';
import './style/checkbox.style.css';

interface CheckBoxProps {
	children: React.ReactNode;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	icon?: React.ReactNode;
}

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
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

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}

	${Icon} {
		visibility: ${props => (props.checked ? 'visible' : 'hidden')};
	}
`;

const Checkbox: React.FC<CheckBoxProps> = props => {
	const { children, ...inputProps } = props;

	const [checked, setChecked] = React.useState(false);

	const handleCheckbox = () => {
		setChecked(curState => !curState);
	};

	return (
		<label>
			<CheckboxContainer>
				<HiddenCheckbox
					type='checkbox'
					checked={checked}
					onChange={handleCheckbox}
				/>
				<StyledCheckbox checked={checked}>
					<Icon viewBox='0 0 24 24'>
						<polyline points='20 6 9 17 4 12' />
					</Icon>
				</StyledCheckbox>
				<span style={{ marginLeft: 8 }}>{children}</span>
			</CheckboxContainer>
		</label>
	);
};

export default Checkbox;

const CheckboxGroup = () => {};
