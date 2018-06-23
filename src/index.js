import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, Title } from "./style";
import classNames from "classnames";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import "./styles.css";

const Img = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${({ imageSrc }) => imageSrc});
`;

const styles = {
  customColor: {
    background: "green",
    "&:hover": {
      background: "blue"
    }
  }
};

function App({ classes }) {
  const stg = true;

  return (
    <Grid container>
      <Grid item>
        <AppContainer>
          <Title>Hello CodeSandbox</Title>
          <Img
            className="test"
            imageSrc="https://lbbfinal.files.wordpress.com/2015/01/logo.gif"
          />
          <h2 className={classNames("a", "b", { c: stg })}>
            Start editing to see some magic happen!
          </h2>
          <Button className={classes.customColor} variant="raised">
            test
          </Button>
        </AppContainer>
      </Grid>
    </Grid>
  );
}

const AppWithStyles = withStyles(styles)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithStyles />, rootElement);
