import * as React from 'react';
import './index.less';

export default function Button() {
  const methods = {
    test() {
      console.log(1);
    }
  };

  return (
    <span onClick={methods.test} className="personal-component-input-container">
      input component
    </span>
  );
}
