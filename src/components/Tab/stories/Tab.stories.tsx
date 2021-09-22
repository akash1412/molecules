import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from '../Tab';

export default {
	title: 'Example/Tabs',
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

export const CustomTab = () => {
	const [selectedTab, setSelectedTab] = useState(1);

	const handleSelectTab = (tabIndex: number) => {
		setSelectedTab(tabIndex);
	};

	return (
		<Tabs selected={selectedTab} handleSelectTab={handleSelectTab}>
			<Tabs.Tab label='Tab 1'>This is Tab 1</Tabs.Tab>
			<Tabs.Tab label='Tab 2'>You can Render Anything!</Tabs.Tab>
			<Tabs.Tab label='Tab 3'>This is Tab 3</Tabs.Tab>
		</Tabs>
	);
};
