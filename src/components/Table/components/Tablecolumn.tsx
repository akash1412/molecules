/** @jsxImportSource theme-ui */

import React from 'react';
import { TableContext } from '../Table';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

type sortDirection = 'asc' | 'dsc' | 'default';

interface IColumnProps {
	children?: React.ReactNode;
	field: string;
	title: string;
	width?: string;
	sortable?: boolean;
}

const Tablecolumn: React.FC<IColumnProps> = props => {
	const { field, title, sortable, width = 'auto' } = props;

	const { tableData, handleSort } = React.useContext(TableContext);

	const [sortIn, setSortIn] = React.useState<sortDirection>('asc');

	const handleColSort = () => {
		if (!sortable && tableData.length > 0) return;

		handleSort(field, sortIn);

		setSortIn(curDir => {
			if (curDir === 'default') {
				return 'asc';
			} else if (curDir === 'asc') {
				return 'dsc';
			} else {
				return 'default';
			}
		});
		// setNextSortDirecion(curState => {
		// 	return curState === 'asc'
		// 		? 'dsc'
		// 		: curState === 'dsc'
		// 		? 'default'
		// 		: 'asc';
		// });
	};

	console.log(sortable);

	return (
		<th
			field-name={field}
			sx={{
				width: width,
				textAlign: 'left',
				p: '8px',
				verticalAlign: 'bottom',
				borderBottom: '1px solid rgba(217,217,217)',
				alignItems: 'center',

				'&:hover': {
					color: sortable && tableData.length > 0 ? 'blueviolet' : '#000',
				},
			}}>
			{title}
			{sortable && tableData.length > 0 && (
				<span
					sx={{
						pl: '8px',
						mt: '2px',
						cursor: sortable && tableData.length > 0 ? 'pointer' : 'text',
					}}
					onClick={handleColSort}>
					{sortIn === 'asc' ? (
						<BsArrowUpShort />
					) : sortIn === 'dsc' ? (
						<BsArrowDownShort />
					) : (
						<BiReset />
					)}
				</span>
			)}
		</th>
	);
};
export default Tablecolumn;
