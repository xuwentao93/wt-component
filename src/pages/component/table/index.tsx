import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '@/utils';
import { Table } from '@/component';
import { columnType } from '../../../component/table';

const table = createPageRootClassName('Table');

const testData: Array<object> = [
  {
    name: 'aaa',
    age: 10,
    height: 178,
    weight: 60,
    position: '杭州',
    pet: '猫',
    key: '1',
    character: '活泼开朗, 蹦蹦跳跳, 这个人的性格特别多样化'
  },
  {
    name: 'aaa',
    age: 10,
    height: 178,
    weight: 60,
    position: '杭州',
    pet: '猫',
    key: '2'
  },
  {
    name: 'bbb',
    age: 19,
    height: 198,
    weight: 60,
    position: 'New York No. 1 Lake Park',
    pet: '猫',
    key: '3'
  },
  {
    name: 'ccc',
    age: 22,
    height: 155,
    weight: 60,
    position: '杭州',
    pet: '猫',
    key: '4',
    character: '内向'
  }
];

const testColumns: Array<columnType> = [
  {
    title: '名字',
    dataIndex: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '身高',
    dataIndex: 'height',
    render(value: number) {
      return `${value / 100}cm`;
    }
  },
  {
    title: '体重',
    dataIndex: 'weight'
  },
  {
    title: '宠物',
    dataIndex: 'pet',
    width: 120
  },
  {
    title: '位置',
    dataIndex: 'position'
  },
  {
    title: '性格',
    dataIndex: 'character'
  }
];

export default function TablePage() {
  return (
    <div className={table}>
      <Table data={testData} columns={testColumns} />
    </div>
  );
}
