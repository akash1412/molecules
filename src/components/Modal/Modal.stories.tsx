import { Meta } from '@storybook/react';
import { useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
} from './Modal';
import { Box } from 'theme-ui';
import { Button } from '../Button/Button';

export default {
	title: 'Example/Modal',
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

export const Default = () => {
	const [isOpen, setOpen] = useState(false);

	const handleModalClose = () => {
		setOpen(curState => !curState);
	};

	return (
		<Box>
			{!isOpen && <Button onClick={() => setOpen(true)}>Open Modal</Button>}
			<Modal isOpen={isOpen} onClose={handleModalClose}>
				<ModalOverlay />

				<ModalContent heading='Modal Title'>
					<ModalBody>Modal Body</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
