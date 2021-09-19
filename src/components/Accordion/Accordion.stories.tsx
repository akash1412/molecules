import { Meta } from '@storybook/react';

import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
} from './Accordion';

export default {
	title: 'Example/Accordion',
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
	return (
		<Accordion collapsable defaultIndex={[1]}>
			<AccordionItem>
				<AccordionButton>accordion one button</AccordionButton>
				<AccordionPanel>accordion one panel</AccordionPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionButton>accordion Two button</AccordionButton>
				<AccordionPanel>accordion two panel</AccordionPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionButton>accordion THree button</AccordionButton>
				<AccordionPanel>accordion THree panel</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
