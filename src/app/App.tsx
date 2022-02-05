import * as React from "react";
import "./App.scss";

export class App extends React.Component<unknown, unknown> {
  constructor(props: unknown) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <>
        <h1>A Headline</h1>
        <p>a headline`s servant</p>
      </>
    );
  }
}
