import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import classNames from "classnames";

import "./styles.css";

const AppContainer = styled.div`
  text-align: center;
  background: yellow;
`;

const Title = styled.h1`
  color: red;
  background: yellow;
`;

function App() {
  const stg = true;

  return (
    <AppContainer>
      <Title>Hello CodeSandbox</Title>
      <h2 className={classNames("a", "b", { c: stg })}>
        Start editing to see some magic happen!
      </h2>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
