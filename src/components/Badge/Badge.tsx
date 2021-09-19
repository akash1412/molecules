/** @jsxImportSource theme-ui */
import styled from '@emotion/styled/macro';
import React from 'react';

import { useThemeUI } from 'theme-ui';

type IappearanceType =
	| 'default'
	| 'information'
	| 'success'
	| 'warning'
	| 'danger';
interface IBadgeProps {
	children: React.ReactNode;

	appearance?: IappearanceType;

	onClick?: () => void;
}

const Badge: React.FC<IBadgeProps> = props => {
	const { children, appearance = 'default' } = props;
	const { theme } = useThemeUI();
	// theme?.badges && theme.badges[appearance]
	return (
		<span
			sx={{
				display: 'inline-block',
				verticalAlign: 'middle',
				py: '4px',
				px: '8px',
				bg: 'badges.' + appearance,
				color: '#fff',
				borderRadius: '20px',
			}}>
			{children}
		</span>
	);
};

export { Badge };
