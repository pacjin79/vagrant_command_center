import * as Photon from '../../photon_components';
import * as React from 'react';
import * as classnames from 'classnames';

interface ITableHeader {
    displayName: string;
    key: string;
}

interface ITableProps extends React.Props<any> {
    striped?: false;
    tableHeaders: Array<ITableHeader>;
    tableRows?: Array<_.Dictionary<any>>;
}

const Table: React.StatelessComponent<ITableProps> = (props: ITableProps) => {
    const {
        striped = false
    } = props;

    const className = classnames({
        "table-striped": striped
    });

    return (
        <table className={className}>
            <thead>
                <tr>
                    {renderTableHeaders(props.tableHeaders)}
                </tr>
            </thead>
            <tbody>
                {renderTableRows(props.tableRows)}
            </tbody>
        </table>
    );
}

function renderTableHeaders(headerData: ITableHeader[]): React.ReactNode {
    return _(headerData).map((header: ITableHeader) => {
        return (
            <th key={header.key}>{header.displayName}</th>
        );
    }).value();
}

function renderTableRows(rowData: Array<_.Dictionary<any>>): React.ReactNode {
    return _(rowData).map((row: any, index: number) => {

        const rowUi = _(row).map((value:any, key: string) => {
            return (
                <td key={`row-${index}-${key}`}>
                    {value}
                </td>
            )
        }).value();
        return <tr key={`row-${index}`}>{rowUi}</tr>
    }).value();
}

export default Table;
