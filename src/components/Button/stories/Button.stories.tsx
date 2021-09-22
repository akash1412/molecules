import { Meta } from '@storybook/react';
import Stack from '../../Stack/Stack';
import { SiSpotify } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../Button';
import { FiAward, FiCheckCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

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
export const Basic = () => (
	<Stack>
		<Button bgColor='primary'>primary</Button>
		<Button bgColor='secondary'>secondary</Button>
	</Stack>
);

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

export const Sizes = () => {
	return (
		<Stack spacing='1em'>
			<Button size='xs'>Button</Button>
			<Button size='sm'>Button</Button>
			<Button size='md'>Button</Button>
			<Button size='lg'>Button</Button>
		</Stack>
	);
};

export const WithIcon = () => {
	return (
		<Stack>
			<Button lefttIcon={<FiCheckCircle />}>checkout</Button>
			<Button lefttIcon={<FiAward />} bgColor='secondary'>
				checkout
			</Button>
		</Stack>
	);
};

export const IconBtn = () => {
	return (
		<Stack spacing='2em'>
			<Button>
				<FiEye />
			</Button>
			<Button>
				<FiEyeOff />
			</Button>
		</Stack>
	);
};

export const loading = () => {
	return (
		<Button isLoading loadingText='logging in ...'>
			button
		</Button>
	);
};
