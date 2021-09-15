/** @jsxImportSource theme-ui */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
interface IConextProp {
	activePanels: number[];
	handlePanelClick: (num: number) => void;
}

const AccordionInternalContext = React.createContext<IConextProp>(
	{} as IConextProp
);

interface IAccordionProps {
	children: React.ReactNode;
	defaultIndex?: number | number[];
	collapsable?: boolean;
	multiple?: boolean;
}

const Accordion: React.FC<IAccordionProps> = props => {
	const [activePanels, setActivePanels] = React.useState((): number[] => {
		switch (true) {
			case props.collapsable:
				return Array.isArray(props.defaultIndex)
					? [...props.defaultIndex]
					: props.defaultIndex
					? [props.defaultIndex]
					: [];
			case props.multiple:
				return Array.isArray(props.defaultIndex)
					? [...props.defaultIndex]
					: [props.defaultIndex || 0];

			default:
				return Array.isArray(props.defaultIndex)
					? [...props.defaultIndex!]
					: [props.defaultIndex || 0];
		}
	});

	const handlePanelClick = (panelIndex: number) => {
		if (props.collapsable) {
			setActivePanels(curState => {
				return curState.includes(panelIndex)
					? curState.filter(index => index !== panelIndex)
					: [...curState, panelIndex];
			});
		} else if (props.multiple) {
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
				{React.Children.map(props.children, (el: any, idx) => {
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
	const { panelIndex, isPanelDisabled } = props;
	const { handlePanelClick } = useContext(AccordionInternalContext);

	return (
		<Button
			disabled={isPanelDisabled}
			onClick={() => !isPanelDisabled && handlePanelClick(panelIndex)}>
			{props.children}
		</Button>
	);
};

const AccordionPanel = (props: any) => {
	return <div sx={{ transition: 'all .4s ease-in-out' }}>{props.children}</div>;
};

export { Accordion, AccordionItem, AccordionButton, AccordionPanel };
