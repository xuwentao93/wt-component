import * as React from 'react';
import { useState } from 'react';
import { Button, Table } from '@/component';
import './index.less';
import { createPageRootClassName } from '../../../utils';
import Code from '../../../utils/code';
import { apiColumns } from '../../../component/table';

const button = createPageRootClassName('button');

const data: Array<object> = [
  {
    attr: 'type',
    introduction: '按钮的基本样式',
    type: 'string',
    default: 'normal',
    key: '1'
  },
  {
    attr: 'loading',
    introduction: '按钮是否加载中',
    type: 'boolean',
    default: 'false',
    key: '2'
  },
  {
    attr: 'disabled',
    introduction: '按钮是否禁用',
    type: 'boolean',
    default: 'false',
    key: '3'
  },
  {
    attr: 'arrow',
    introduction: '按钮箭头的朝向',
    type: 'top | bottom | left | right',
    default: '\'\'',
    key: '4'
  }
];

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);

  return (
    <div className={button}>
      <h1>Button 按钮</h1>
      <div className="title-brief">常用的页面操作按钮, 用来相应用户的点击行为。</div>
      <h2>使用演示</h2>
      <div className="show-code-container">
        <div className="show-code-box">
          <div className="show-code-box-header">
            <Button>普通按钮</Button>
            <Button type="primary">基础按钮</Button>
            <Button type="warn">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
          </div>
          <div className="show-code-box-footer">
            <span>利用 type 属性修改按钮的基本样式。</span>
            <Code onClick={() => setShowCode1(!showCode1)} />
          </div>
          {showCode1 && (
            <div className="code">
              {'import { Button } from \'antd\';'}
            </div>
          )}
        </div>

        <div className="show-code-box">
          <div className="show-code-box-header">
            <Button loading={loading} onClick={() => setLoading(!loading)}>
              点我显示加载中
            </Button>
            <Button type="primary" onClick={() => setDisable(true)}>
              点我禁用下一个按钮
            </Button>
            <Button type="primary" disabled={disable} onClick={() => console.log(1)}>
              点我在控制台打印日志
            </Button>
          </div>
          <div className="show-code-box-footer">
            <span>
              用 loading 属性显示或者关闭加载样式, disable 属性表示按钮是否禁用, 被禁用的按钮点击事件将无效。
            </span>
            <Code onClick={() => setShowCode2(!showCode2)} />
          </div>
        </div>
      </div>

      <div className="show-code-container">
        <div className="show-code-box">
          <div className="show-code-box-header">
            <Button arrow="top" type="primary">箭头朝上</Button>
            <Button arrow="bottom" type="primary">箭头朝下</Button>
            <Button arrow="left" type="primary">箭头朝左</Button>
            <Button arrow="right" type="primary">箭头朝右</Button>
          </div>
          <div className="show-code-box-footer">
            <span>用 arrow 属性给按钮添加箭头, 表示按钮朝向。</span>
            <Code onClick={() => setShowCode3(!showCode3)} />
          </div>
        </div>
      </div>

      <h2 style={{ margin: '40px 0' }}>API</h2>

      <Table data={data} columns={apiColumns} />
    </div>
  );
}
