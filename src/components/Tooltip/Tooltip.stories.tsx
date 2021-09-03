import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import CustomTooltip from './Tooltip';
import { FiBell } from 'react-icons/fi';

export default {
	title: 'Example/Tooltip',
	decorators: [
		(Story: any) => (
			<div
				style={{
					padding: '3em',
					display: 'grid',
					placeItems: 'center',
				}}>
				{Story()}
			</div>
		),
	],
} as Meta;

export const Tooltip = () => (
	<CustomTooltip content='this is a tooltip' placement='bottom'>
		<FiBell />
	</CustomTooltip>
);
