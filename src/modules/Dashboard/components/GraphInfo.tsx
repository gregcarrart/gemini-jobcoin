import React, { useContext } from 'react';
import styled from 'styled-components';
import { Line } from "react-chartjs-2";
import 'chart.js'
import moment from 'moment';
import jwt from 'jwt-simple';
import { MainContext } from '../../../contexts';

const StyledGraphModule = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 15px;
  display: flex;
  flex-flow: column;
  margin-bottom: 25px;
  flex: 1;
`

const GraphInfo = () => {  
  const { transactions, jwt: jwToken } = useContext(MainContext);
  const userAddress = jwt.decode(jwToken, 'secret').tokenAddress;
  let startingBalance = transactions.length ? parseFloat(transactions[0].amount) : 0;
  const data = {
    labels: transactions.map(t => moment(t.timestamp).format('MM/DD/YY hh:ss')),
    datasets: [
      {
        label: "Balance History",
        data: transactions.map(t => {
          if (parseFloat(t.amount) === startingBalance) {
            return startingBalance;
          }
          if (t.fromAddress === userAddress) {
            startingBalance = startingBalance - parseFloat(t.amount);
          } else {
            startingBalance = startingBalance + parseFloat(t.amount);
          }
          return startingBalance;
        }),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <StyledGraphModule>
      <Line data={data} />
    </StyledGraphModule>
  );
};

export default GraphInfo;