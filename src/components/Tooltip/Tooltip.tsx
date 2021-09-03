import { FC, ReactNode } from 'react';
import { Box } from 'theme-ui';

interface Props {
	children: ReactNode;
	placement?: 'left' | 'top' | 'right' | 'bottom';
	content: string;
	size?: string | string[];
}

const Tooltip: FC<Props> = props => {
	const { children, placement = 'left', content, size } = props;

	return <Box sx={{ size: size }}>{props.children}</Box>;
};

export default Tooltip;
