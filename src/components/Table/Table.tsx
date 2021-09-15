/** @jsxImportSource theme-ui */

import { Spinner } from '@theme-ui/components';
import React from 'react';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

type sortDirection = 'asc' | 'dsc' | 'default';

interface ITableInternalContext {
	tableData: any[];
	sortDirection: sortDirection | 'asc';
	handleSort: (columnToSort: string, colSortDir: string) => void;
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
	const {
		items,
		children,
		onRowClick,
		sort,
		sortDirection = 'default',
		sortOn,
		emptyMessage,
		isLoading,
	} = props;

	const columnProps = React.Children.toArray(children).map(
		(element: any) => element.props
	);

	const [tableData, setTableData] = React.useState(items);

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

	const handleSort = (columnToSort: string, colSortDir: string) => {
		const cloneData = [...tableData];
		console.log(colSortDir);
		if (sortOn) {
			if (colSortDir === 'asc') {
				setTableData([
					...cloneData.sort(
						(d1, d2) => d1[columnToSort || sortOn] - d2[columnToSort || sortOn]
					),
				]);
			} else {
				setTableData([
					...cloneData.sort(
						(d1, d2) => d2[columnToSort || sortOn] - d1[columnToSort || sortOn]
					),
				]);
			}
		}
	};

	return (
		<TableContext.Provider value={{ tableData, sortDirection, handleSort }}>
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

const Column: React.FC<IColumnProps> = props => {
	const { field, title, sortable, width = 'auto' } = props;

	const { tableData, sortDirection, handleSort } = React.useContext(
		TableContext
	);

	const [colSortDir, setColSortDir] = React.useState(sortDirection);

	const handleColSort = () => {
		if (!sortable && tableData.length > 0) return;

		handleSort(field, colSortDir);

		setColSortDir(curDir => {
			if (curDir === 'default') {
				return 'asc';
			} else if (curDir === 'asc') {
				return 'asc';
			} else {
				return 'default';
			}
		});
	};

	return (
		<th
			onClick={handleColSort}
			field-name={field}
			sx={{
				width: width,
				textAlign: 'left',
				p: '8px',
				verticalAlign: 'bottom',
				borderBottom: '1px solid rgba(217,217,217)',
				alignItems: 'center',
				cursor: sortable && tableData.length > 0 ? 'pointer' : 'text',
				'&:hover': {
					color: sortable && tableData.length > 0 ? 'blueviolet' : '#000',
				},
			}}>
			{title}
			{sortable && tableData.length > 0 && (
				<span sx={{ pl: '8px', mt: '2px' }}>
					{colSortDir === 'asc' ? (
						<BsArrowUpShort />
					) : colSortDir === 'dsc' ? (
						<BsArrowDownShort />
					) : (
						<BiReset />
					)}
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
