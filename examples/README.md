# Example for react-client-dimensions

React client dimensions is a very easy-to-use and concise library that provides you with your client's dimensions in real time and is responsive to window resizing.

All you need to do is,

1. Import the package

```js
import useClientDimensions from "react-client-dimensions";
```

2. Use it

```js
const { vw, vh } = useClientDimensions();
```

Yeah, that's it. Its that easy-to-use. This example directory contains the following simple example.

```js
import React from "react";
import useClientDimensions from "react-client-dimensions";

export default () => {
  const { vw, vh } = useClientDimensions();
  return (
    <>
      <h1>React Client Dimensions Example</h1>
      <p>Your current viewport width is: {vw}</p>
      <p>Your current viewport height is: {vh}</p>
    </>
  );
};
```

To run it, simply cd into the directory and run the start command

```
cd examples
yarn start
```
