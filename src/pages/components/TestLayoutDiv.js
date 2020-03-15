import React from "react";
import styled from "styled-components";

const Content = styled.div `
  background: green;
  color: white;
`;



function TestLayoutDiv(props) {
  return (
    <Content>
      {props.children}
    </Content>
  );
}

export default TestLayoutDiv;
