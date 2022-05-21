import { defaultMaxListeners } from "events";
import React from "react";
import Card from "./components/Card";

export const App = () => {
  return (
    <div>
      <Card width="200px" height="200px">
        <button>Button</button>
        <div>test</div>
      </Card>
    </div>
  );
};

export default App;
