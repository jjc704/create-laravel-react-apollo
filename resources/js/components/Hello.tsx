import * as React from "react";

export interface IProps {
  name: string;
}

function Hello( { name }: IProps): JSX.Element {
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name}
      </div>
    </div>
  );
}

export default Hello;