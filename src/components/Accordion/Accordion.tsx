/** @jsxImportSource theme-ui */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
interface IConextProp {
	activePanels: number[];
	handlePanelClick: (num: number) => void;
}

const AccordionInternalContext = React.createContext<IConextProp>(
	{} as IConextProp
);

interface IAccordionProps {
	children: React.ReactNode;

	/* 
	 default Index refers to active panel,
	 
	 it can both sigle & array values.
	 
	 for ex:-if defaultIndex=1 , then first panel will be active

	*/
	defaultIndex?: number | number[];

	/* 
	 collapsable takes a boolean value, 

	 setting it true,we can toogle any panel
	*/
	collapsable?: boolean;

	/* 
	 on setting multiple to true, 
	 
	 we can open multiple panels
	
	 */
	multiple?: boolean;

	/* 
	[default behaviour]: only one panel can be active a single time
	
	*/
}

const Accordion: React.FC<IAccordionProps> = props => {
	const { children, defaultIndex, collapsable, multiple } = props;

	const [activePanels, setActivePanels] = React.useState((): number[] => {
		switch (true) {
			case collapsable:
			case collapsable && multiple:
				return Array.isArray(defaultIndex)
					? [...defaultIndex]
					: defaultIndex
					? [defaultIndex]
					: [];
			case multiple:
				return Array.isArray(defaultIndex)
					? [...defaultIndex]
					: [defaultIndex || 0];

			default:
				return Array.isArray(defaultIndex)
					? [...defaultIndex!]
					: [defaultIndex || 0];
		}
	});

	const handlePanelClick = (panelIndex: number) => {
		if (collapsable) {
			setActivePanels(curState => {
				return curState.includes(panelIndex)
					? curState.filter(index => index !== panelIndex)
					: [...curState, panelIndex];
			});
		} else if (multiple) {
			if (activePanels.length === 1 && activePanels.includes(panelIndex))
				return;
			setActivePanels(curState => {
				return curState.includes(panelIndex)
					? curState.filter(index => index !== panelIndex)
					: [...curState, panelIndex];
			});
		} else {
			setActivePanels([panelIndex]);
		}
	};

	return (
		<AccordionInternalContext.Provider
			value={{ activePanels, handlePanelClick }}>
			<div sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				{React.Children.map(children, (el: any, idx) => {
					return React.cloneElement(el, {
						state: activePanels.includes(idx) ? 'open' : 'collapsed',
						panelIndex: idx,
					});
				})}
			</div>
		</AccordionInternalContext.Provider>
	);
};

const AccordionItem = (props: any) => {
	const { state, panelIndex, disabled } = props;

	return (
		<div
			panel-state={state}
			panel-index={panelIndex}
			sx={{
				display: 'flex',
				flexDirection: 'column',

				'& > div': {
					display: state === 'open' && !disabled ? 'block' : 'none',
				},
			}}>
			{React.Children.map(props.children, childEL => {
				return React.cloneElement(childEL, {
					panelState: state,
					panelIndex: panelIndex,
					isPanelDisabled: disabled,
				});
			})}
		</div>
	);
};

AccordionItem.prototype = {
	disabled: PropTypes.bool,
};

const AccordionButton = (props: any) => {
	const { panelIndex, isPanelDisabled, panelState } = props;
	const { handlePanelClick } = useContext(AccordionInternalContext);

	return (
		<Button
			sx={{ display: 'flex', borderRadius: '0' }}
			disabled={isPanelDisabled}
			onClick={() => !isPanelDisabled && handlePanelClick(panelIndex)}>
			{props.children}
			<span sx={{ ml: 'auto' }}>
				{panelState === 'open' ? (
					<FiChevronUp color='#fff' />
				) : (
					<FiChevronDown color='#fff' />
				)}
			</span>
		</Button>
	);
};

const AccordionPanel = (props: any) => {
	const { panelState } = props;

	console.log(panelState);
	return <div sx={{ p: '1.2rem 1.6rem' }}>{props.children}</div>;
};

export { Accordion, AccordionItem, AccordionButton, AccordionPanel };
