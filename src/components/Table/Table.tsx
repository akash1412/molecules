/** @jsxImportSource theme-ui */

import { Spinner } from '@theme-ui/components';
import React from 'react';
import Tablecolumn from './components/Tablecolumn';

interface ITableInternalContext {
	tableData: any[];

	handleSort: (columnToSort: string, colSortDir: string) => void;
}

export const TableContext = React.createContext<ITableInternalContext>(
	{} as ITableInternalContext
);
interface ITableProps {
	children?: React.ReactNode;
	items: any[];
	onRowClick?: (item: any) => void;
	sort?: boolean;
	sortOn?: string;
	comparator?: (a: any, b: any) => void;
	emptyMessage?: string;
	isLoading?: boolean;
}

interface IColumnProps {
	children?: React.ReactNode;
	field: string;
	title: string;
	width?: string;
	sortable?: boolean;
}

const Table: React.FC<ITableProps> & {
	Column: React.FC<IColumnProps>;
} = props => {
	const { items, children, onRowClick, sortOn, emptyMessage, isLoading } =
		props;

	const columnProps = React.Children.toArray(children).map(
		(element: any) => element.props
	);

	const [tableData, setTableData] = React.useState(items);

	const handleSort = (columnToSort: string, colSortDir: string) => {
		const cloneData = [...tableData];

		if (sortOn) {
			if (colSortDir === 'asc') {
				setTableData([
					...cloneData.sort(
						(d1, d2) => d1[columnToSort || sortOn] - d2[columnToSort || sortOn]
					),
				]);
			} else if (colSortDir === 'dsc') {
				setTableData([
					...cloneData.sort(
						(d1, d2) => d2[columnToSort || sortOn] - d1[columnToSort || sortOn]
					),
				]);
			} else {
				setTableData(items);
			}
		}
	};

	const renderTableData = (item: any) => {
		return columnProps.map(({ field, children, width = 'auto' }: any) => {
			return (
				<td
					sx={{
						width: width,
						padding: '8px',
						textAlign: 'left',
						overflowWrap: 'break-word',
						borderTop: '1px solid rgba(217,217,217)',
						verticalAlign: 'middle',
					}}>
					<div
						sx={{
							display: children ? 'flex' : 'block',
							alignItems: children ? 'center' : 'stretch',
						}}>
						<span
							sx={{
								display: children ? 'block' : 'none',
								width: '32px',
								height: '32px',
							}}>
							{children}
						</span>
						<div
							sx={{
								ml: children && '12px',
								fontWeight: '500',
								lineHeight: 'inherit',
							}}>
							{item[field]}
						</div>
					</div>
				</td>
			);
		});
	};

	return (
		<TableContext.Provider value={{ tableData, handleSort }}>
			<table cellSpacing='0' width='100%'>
				<thead
					sx={{
						width: '100%',
					}}>
					<tr sx={{ borderCollapse: 'collapse', borderSpacing: 0 }}>
						{children}
					</tr>
				</thead>

				{tableData.length === 0 && !isLoading && (
					<EmptyMessage message={emptyMessage!} />
				)}
				<tbody>
					{tableData.length > 0 &&
						!isLoading &&
						tableData.map((item: any) => (
							<tr
								sx={{
									cursor: onRowClick ? 'pointer' : 'initial',
									'&:hover': {
										transition: '.2s',
										backgroundColor: 'rgba(217,217,217,.8)',
									},
								}}
								onClick={() => onRowClick && onRowClick(item)}>
								{renderTableData(item)}
							</tr>
						))}
				</tbody>
				{isLoading && (
					<div
						sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Spinner />
					</div>
				)}
			</table>
		</TableContext.Provider>
	);
};

Table.Column = Tablecolumn;

const EmptyMessage: React.FC<{ message: string }> = ({ message }) => {
	return <h1>{message}</h1>;
};

export { Table };
