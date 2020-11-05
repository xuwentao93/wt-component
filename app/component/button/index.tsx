import * as React from 'react';

export default function Button() {
  const methods = {
    test() {
      console.log(1);
    }
  };

  return <span onClick={methods.test}>123</span>;
}
