import React from "react";
import styled from 'styled-components';

const PageHeaderContent = styled.div`
  
`;


function PageHeader(props) {
  return (
    <PageHeaderContent>
      <h2>{props.title}</h2>
    </PageHeaderContent>
  );
}

export default PageHeader;