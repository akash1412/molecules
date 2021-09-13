/** @jsxImportSource theme-ui */

import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

type sortDirection = 'asc' | 'dsc';

interface ITableInternalContext {
	tableData: any[];
	sortDirection: sortDirection | 'asc';
	handleSort: (columnToSort: string) => void;
}

const TableContext = React.createContext<ITableInternalContext>(
	{} as ITableInternalContext
);
interface ITableProps {
	children?: React.ReactNode;
	items: any[];
	onRowClick?: (item: any) => void;
	sort?: boolean;
	sortOn?: string;
	sortDirection?: sortDirection;
	comparator?: (a: any, b: any) => void;
	emptyMessage?: string;
}

interface IColumnProps {
	field: string;
	title: string;
	width?: string;
	sortable?: boolean;
}

const Table: React.FC<ITableProps> & {
	Column: React.FC<IColumnProps>;
} = props => {
	const {
		items,
		children,
		onRowClick,
		sort,
		sortDirection = 'asc',
		sortOn,
		emptyMessage,
	} = props;

	const columnProps = React.Children.toArray(children).map(
		(element: any) => element.props
	);

	const [tableData, setTableData] = React.useState(items);

	const renderTableData = (item: any) => {
		return columnProps.map(({ field }: any) => {
			return <td>{item[field]}</td>;
		});
	};

	const handleSort = (columnToSort: string) => {
		const cloneData = [...tableData];

		//@ts-ignore
		setTableData([...cloneData.sort((d1, d2) => d1[sortOn] - d2[sortOn])]);
	};

	return (
		<TableContext.Provider value={{ tableData, sortDirection, handleSort }}>
			<table sx={{ padding: '10px', border: '2px solid #000' }}>
				<tr>{props.children}</tr>
				{tableData.length === 0 && <EmptyMessage message={emptyMessage!} />}
				{tableData.length > 0 &&
					tableData.map((item: any) => (
						<tr
							sx={{ cursor: 'pointer' }}
							onClick={() => onRowClick && onRowClick(item)}>
							{renderTableData(item)}
						</tr>
					))}
			</table>
		</TableContext.Provider>
	);
};

const Column: React.FC<IColumnProps> = props => {
	const { field, title, sortable } = props;

	const { tableData, sortDirection, handleSort } = React.useContext(
		TableContext
	);

	const [colSortDir, setColSortDir] = React.useState(sortDirection);

	const handleColSort = () => {
		if (!sortable && tableData.length > 0) return;

		handleSort(field);

		setColSortDir(curDir => {
			return curDir === 'asc' ? 'dsc' : 'asc';
		});
	};

	return (
		<th
			onClick={handleColSort}
			field-name={field}
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				cursor: sortable && tableData.length > 0 ? 'pointer' : 'text',
				':hover': {
					color: sortable && tableData.length > 0 ? 'blueviolet' : '#000',
				},
			}}>
			{title}
			{sortable && tableData.length > 0 && (
				<span>
					{colSortDir === 'asc' ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
				</span>
			)}
		</th>
	);
};

Table.Column = Column;

const EmptyMessage: React.FC<{ message: string }> = ({ message }) => {
	return <h1>{message}</h1>;
};

export { Table };
