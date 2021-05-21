import * as React from 'react';
import { useRef, memo } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const TableStyle = createComponentRootClassName('Table');

export type columnType = {
  title: string,
  dataIndex: string,
  render?: Function
};

interface TableProps extends BasicProps {
  data: Array<object>, // 数据部分.
  columns: Array<columnType> // 列表项.
}

function Table({
  children,
  className = '',
  data,
  columns,
  style = {}, // style 是加在外部的 container 上, className 是加在内部 table 上.
  compRef = useRef()
}: TableProps) {
  const TableClass: Array<string> = [];
  const classNames = getClassName(TableClass, TableStyle, [TableStyle, className]);
  return (
    <div className={`${TableStyle}-container`} ref={compRef}>
      <table className={classNames}>
        <thead className={`${TableStyle}-thead`}>
          <tr>
            {columns.map((item => <th key={item.title} className={`${TableStyle}-th`}>{item.title}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={(item as any).key} className={`${TableStyle}-tr`}>
              {columns.map(column => (
                <td key={column.title} className={`${TableStyle}-td`}>
                  {column.render
                    ? column.render((item as any)[column.dataIndex])
                    : (item as any)[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.defaultProps = {
};

export default memo(Table);
