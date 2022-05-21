import { defaultMaxListeners } from "events";
import React from "react";
import Card, { CardVariant } from "./components/Card";

export const App = () => {
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
        <div>test</div>
      </Card>
    </div>
  );
};

export default App;
