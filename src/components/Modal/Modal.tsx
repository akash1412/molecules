/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from '@theme-ui/components';
import { Button } from '../Button/Button';
import Heading from '../Heading/Heading';
import { AiOutlineClose } from 'react-icons/ai';

interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
}

interface IModalOverlayProps {
	onClick?: () => void;
}

const ModalContext = React.createContext({} as IModalProps);

export const Modal: React.FC<IModalProps> = props => {
	const { isOpen, onClose } = props;

	return (
		<React.Fragment>
			<ModalContext.Provider value={{ isOpen, onClose }}>
				{isOpen ? props.children : null}
			</ModalContext.Provider>
		</React.Fragment>
	);
};

export const ModalOverlay: React.FC<IModalOverlayProps> = ({ onClick }) => {
	return (
		<div
			sx={{
				width: '100vw',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0,0,0,0.4)',
				zIndex: '1',
			}}
			onClick={onClick}>
			{' '}
		</div>
	);
};

interface IModalContent {
	children: React.ReactNode;
	heading?: string;
}

export const ModalContent: React.FC<IModalContent> = props => {
	const { onClose } = React.useContext(ModalContext);

	return (
		<div
			sx={{
				top: 5,
				left: 0,
				zIndex: '2',
				position: 'absolute',
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<div
				sx={{
					borderRadius: '4px',
					backgroundColor: '#fff',
					p: '1.2rem',
					width: ['90vw', '80vw', '50vw'],
					display: 'flex',
					flexDirection: 'column',
				}}>
				<div
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
					}}>
					<Heading fontSize='1.5rem'>{props.heading}</Heading>
					<Button onClick={onClose}>
						<AiOutlineClose />
					</Button>
				</div>
				{props.children}
			</div>
		</div>
	);
};

export const ModalBody: React.FC = props => {
	return <Box sx={{ flexGrow: 1, mt: '2rem' }}>{props.children}</Box>;
};

export const ModalFooter: React.FC = props => {
	return <Box>{props.children}</Box>;
};
