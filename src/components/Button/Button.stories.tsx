import { Meta } from '@storybook/react';
import Stack from '../Stack/Stack';
import { SiSpotify } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from './Button';

export default {
	title: 'Example/Buttons',
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
export const Basic = () => <Button>Basic</Button>;

// export const Sizes = Template.bind({});
// Sizes.args = {
// 	children: 'Button',
// };

// export const Loading = Template.bind({});

// Loading.args = {
// 	isLoading: true,
// 	loadingText: 'loading',
// };

// export const WithIcon = Template.bind({});

// WithIcon.args = {
// 	lefttIcon: FiBell,
// 	children: 'With Icon',
// };

export const SocialButtons = () => {
	return (
		<Stack spacing='2em'>
			<Button
				variant='spotify'
				iconSpacing='1em'
				lefttIcon={<SiSpotify color='#000' fontSize='1.4rem' />}>
				Spotify
			</Button>
			<Button
				variant='facebook'
				iconSpacing='1em'
				lefttIcon={<FaFacebookSquare color='#fff' fontSize='1.4rem' />}>
				Facebook
			</Button>
			<Button
				variant='google'
				iconSpacing='1em'
				lefttIcon={<FcGoogle fontSize='1.4rem' />}>
				Google
			</Button>
		</Stack>
	);
};

export const variants = () => {
	return (
		<Stack>
			<Button>Default</Button>
			<Button>Link</Button>
			<Button>outlined</Button>
		</Stack>
	);
};
