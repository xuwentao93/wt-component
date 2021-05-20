import * as React from 'react';
import { useRef } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const TableStyle = createComponentRootClassName('Table');

interface TableProps extends BasicProps {
  data: Array<any>
}

export default function Table({
  children,
  className = '',
  data,
  compRef = useRef()
}: TableProps) {
  const TableClass: Array<string> = [];
  const classNames = getClassName(TableClass, TableStyle, [TableStyle, className]);
  return (
    <div className={classNames} ref={compRef}>{children}</div>
  );
}

Table.defaultProps = {
};
