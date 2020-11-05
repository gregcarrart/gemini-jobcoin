import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
  Button, Input, Form, Alert,
 } from 'reactstrap';
import jwt from 'jwt-simple';
import axios from 'axios';
import InfoModule from '../../../components/InfoModule';
import { useForm } from '../../../CustomHooks';
import { MainContext } from '../../../contexts';

const StyledFormContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledAlert = styled(Alert)`
  margin-top: 5px;
  position: absolute;
  width: 100%;
  padding: 5px;
  text-align: center;
`;

const TransferInfo = () => {
  const { jwt: jwtToken, setBalance, setTransactions } = useContext(MainContext);
  
  const Transfer = () => {
    const [formAlert, setFormAlert] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
      setLoading(true);
      setFormAlert('');
      const apiUrl = `https://jobcoin.gemini.com/granddad-coagulant/api/transactions`;
      const secret = 'secret';
      const fromAddress = jwt.decode(jwtToken, secret);

      axios.post(apiUrl, null, { params: {
        fromAddress: fromAddress.tokenAddress,
        toAddress: inputs.destination,
        amount: inputs.amount,
      }})
      .then((resp) => {
        if (resp.data && resp.data.status && resp.data.status === 'OK') {
          const apiUrl = `https://jobcoin.gemini.com/granddad-coagulant/api/addresses/${fromAddress.tokenAddress}`;
          axios.get(apiUrl).then((resp) => {
            if (resp.data) {
              setBalance(resp.data.balance);
              setTransactions(resp.data.transactions);
              setLoading(false);
            }

            setLoading(false);
            return setFormAlert('Could not retreive data.');
          }).catch(err => {
            setFormAlert('Error handling transaction data.');
            setLoading(false);
          });
        }
      })
      .catch(err => {
        setLoading(false);
        setFormAlert('could not complete this request.');
      });
    };

    const { handleSubmit, handleInputChange, inputs } = useForm(onSubmit);

    return (
      <StyledFormContainer>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            type="text" // need to change this once users with emails are available
            name="destination"
            placeholder="Destination Address"
            onChange={handleInputChange}
            value={inputs.destination || ''}
            style={{ marginBottom: '20px' }}
          />
          <Input
            type="text" // need to change this once users with emails are available
            name="amount"
            placeholder="Amount to Send"
            onChange={handleInputChange}
            value={inputs.amount || ''}
            style={{ marginBottom: '20px' }}
          />
  
          <Button
            disabled={loading}
            color="primary"
            intent="success"
            type="submit"
            style={{ width: '100%' }}
          >
            Send It!
          </Button>
          {formAlert !== '' && (
            <StyledAlert color="danger">
              <strong>Error: </strong>
              {formAlert}
            </StyledAlert>
          )}
        </Form>
      </StyledFormContainer>
    )
  }

  return (
    <InfoModule header="Send Jobcoin" content={Transfer} />
  );
};

export default TransferInfo;