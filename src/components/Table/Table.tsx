/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import React from 'react';

interface ITableProps {
	children?: React.ReactNode;
	items: object[];
}

const Table = (props: ITableProps) => {
	const { items, children } = props;

	const childrenProps = React.Children.toArray(children).map(
		(element: any) => element.props
	);

	const [] = React.useState();

	const [tableData, setTableData] = React.useState(items);

	const renderTableData = (item: any) => {
		return childrenProps.map(({ field }: any) => {
			return <td>{item[field]}</td>;
		});
	};

	return (
		<table>
			<tr>
				{childrenProps.map((childProp, idx) => (
					<th key={idx}>{childProp.title}</th>
				))}
			</tr>
			{tableData.map((item: any) => {
				return <tr>{renderTableData(item)}</tr>;
			})}
		</table>
	);
};

interface IColumnProps {
	field: string;
	title: string;
	width?: string;
}

const Column: React.FC<IColumnProps> = () => {
	return <div></div>;
};

// Column.proptypes = {
// 	field: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	width: PropTypes.string,
// };

Table.Column = Column;

export { Table };
