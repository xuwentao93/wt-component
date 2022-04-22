import * as React from 'react';
import { useState } from 'react';
import './index.less';
import { createPageRootClassName } from '@/utils';
import { Input } from '@/component';
import Search from '@/icon/search';

const input = createPageRootClassName('input');

export default function InputPage() {
  const [v, setV] = useState('444');

  const methods = {
    focus() {
      console.log('focus!');
    },
    blur() {
      // console.log('blur!');
    },
    change(e: React.ChangeEvent<HTMLInputElement>) {
      setV(e.target.value);
    }
  };
  return (
    <div className={input}>
      <Input
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => methods.change(e)}
        icon={<Search />}
        placeholder="sss"
      />
      <div style={{ marginBottom: '20px', minHeight: '1px' }} />
      <Input
        prefix={1}
        suffix="123"
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => methods.change(e)}
        placeholder="aaa"
      />
      <div style={{ marginBottom: '20px', minHeight: '1px' }} />
      <Input
        prefix={<div>this is a div</div>}
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => methods.change(e)}
        value={v}
      />
    </div>
  );
}
