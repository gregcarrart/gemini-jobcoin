import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../../../contexts';
import InfoModule from '../../../components/InfoModule';

const StyledBalance = styled.h3`
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BalanceInfo = () => {
  const { balance } = useContext(MainContext);
  const formattedBalance = parseFloat(balance).toFixed(18);
  
  const Balance = () => (<StyledBalance>{formattedBalance}</StyledBalance>)

  return (
    <InfoModule header="Balance" content={Balance} />
  );
};

export default BalanceInfo;