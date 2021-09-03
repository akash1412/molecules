import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import { FiBell } from 'react-icons/fi';
import Button from './Button';

export default {
	title: 'Example/Button',
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

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Basic = () => <Button backgroundColor='#fff'>Basic</Button>;

// export const Sizes = Template.bind({});
// Sizes.args = {
// 	children: 'Button',
// };

export const Loading = Template.bind({});

Loading.args = {
	isLoading: true,
	loadingText: 'loading',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
	lefttIcon: <FiBell />,
	children: 'With Icon',
};
