import React from 'react';
import styled from 'styled-components';

const StyledModule = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  height: 300px;
  display: flex;
  flex-flow: column;
  margin-bottom: 25px;
`;

const StyledModuleHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid #333;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 15px;
`;

const StyledModuleContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  align-items: center;
`;

const InfoModule = (props:any) => (
  <StyledModule>
    <StyledModuleHeader>{ props.header }</StyledModuleHeader>
    <StyledModuleContent>
      <props.content />
    </StyledModuleContent>
  </StyledModule>
);

export default InfoModule;