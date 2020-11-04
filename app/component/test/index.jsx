import React, { useState } from 'react';

export default function Test() {
  const [test, setTest] = useState(10);

  const methods = {
    changeTest() {
      setTest(test + 1);
    }
  };

  return (
    <div>
      {test}
      <span onClick={methods.changeTest}>click me</span>
    </div>
  );
}
