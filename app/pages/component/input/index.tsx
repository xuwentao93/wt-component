import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '@/utils/index.ts';
import { Input } from '@/component/index';
// eslint-disable-next-line import/no-unresolved
import { Search } from '@/icon/index';

const input = createPageRootClassName('input');

export default function InputPage() {
  const methods = {
    focus() {
      console.log('focus!');
    },
    blur() {
      console.log('blur!');
    },
    change(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }
  };
  return (
    <div className={input}>
      <Input
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={e => methods.change(e)}
        icon={<Search />}
        placeholder="sss"
      />
      <div style={{ marginBottom: '20px', minHeight: '1px' }} />
      <Input
        prefix={1}
        suffix="123"
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={e => methods.change(e)}
        placeholder="aaa"
      />
      <div style={{ marginBottom: '20px', minHeight: '1px' }} />
      <Input
        prefix={<div>this is a div</div>}
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={e => methods.change(e)}
      />
    </div>
  );
}
