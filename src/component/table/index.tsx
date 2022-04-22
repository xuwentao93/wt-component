import * as React from 'react';
import { useRef, memo } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils';

const TableStyle = createComponentRootClassName('Table');

export type columnType = {
  title: string, // 标题.
  dataIndex: string, // 对应的字段.
  width?: number, // 列的宽度.
  render?: Function // 渲染规则.
};

interface TableProps extends BasicProps {
  data: Array<object>, // 数据部分.
  columns: Array<columnType> // 列表项.
}

export const apiColumns: Array<columnType> = [
  {
    title: '属性',
    dataIndex: 'attr'
  },
  {
    title: '说明',
    dataIndex: 'introduction'
  },
  {
    title: '类型',
    dataIndex: 'type',
    render(value: string) {
      return <span style={{ color: '#c41d7f' }}>{value}</span>;
    }
  },
  {
    title: '默认值',
    dataIndex: 'default'
  }
];

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
      <table className={classNames} style={{ ...style }}>
        <thead className={`${TableStyle}-thead`}>
          <tr>
            {columns.map((item => (
              <th
                key={item.title}
                className={`${TableStyle}-th`}
                style={item.width ? { maxWidth: `${item.width}px`, minWidth: `${item.width}px` } : {}}
              >
                {item.title}
              </th>
            )))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={(item as any).key} className={`${TableStyle}-tr`}>
              {columns.map(column => (
                <td
                  key={column.title}
                  className={`${TableStyle}-td`}
                  style={column.width ? { maxWidth: `${column.width}px`, minWidth: `${column.width}px` } : {}}
                >
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
