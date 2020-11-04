import React from 'react';
import styled from 'styled-components';
import BalanceInfo from '../components/BalanceInfo';
import TransferInfo from '../components/TransferInfo';
import GraphInfo from '../components/GraphInfo';

const StyledDashboard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;

  @media(min-width: 768px) {
    width: calc(33.333% - 25px);
  }
`;

const StyledLargeColumn = styled.div`
  width: 100%;
  display: block;

  @media(min-width: 768px) {
    width: calc(66.6666% - 25px);
  }
`;

const Dashboard = () => (
  <StyledDashboard>
    <StyledColumn>
      <BalanceInfo />
      <TransferInfo />
    </StyledColumn>
    <StyledLargeColumn>
      <GraphInfo />
    </StyledLargeColumn>
  </StyledDashboard>
);

export default Dashboard;