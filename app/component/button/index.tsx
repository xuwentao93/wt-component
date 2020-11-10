import * as React from 'react';
import './index.less';

export default function Button() {
  const methods = {
    test() {
      console.log(1);
    }
  };

  return <div onClick={methods.test} className="personal-component-button-container">123</div>;
}
