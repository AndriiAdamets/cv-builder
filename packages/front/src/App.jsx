import React, { useState, useEffect } from 'react';

const App = function () {
  const [foo, setFoo] = useState('N/A');
  useEffect(
    () => {
      fetch('/api/foo')
        .then((res) => res.json())
        .then((data) => setFoo(data.foo))
        .catch((err) => setFoo(err.message));
    },
  );

  return (
    <p>
      Server responded with foo:
      {foo}
    </p>
  );
};

export default App;
