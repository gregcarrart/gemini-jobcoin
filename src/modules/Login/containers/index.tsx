import React, { useState, useContext } from 'react';
import {
 Button, Input, Form, Alert,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import jwt from 'jwt-simple';
import axios from 'axios';
import { useForm } from '../../../CustomHooks';
import { MainContext } from '../../../contexts';
import Logo from '../../../images/logo.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding-top: 150px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  padding: 24px;
  border: solid 1px #dee2e6;
  position: relative;
  background-color: white;
`;

const StyledAlert = styled(Alert)`
  margin-top: 5px;
  position: relative;
  width: 100%;
  padding: 5px;
  text-align: center;
`;

const StyledLogo = styled.img`
  width: 180px;
  height: auto;
  margin: 0 auto;
`;

const Login = (props: any) => {
  const { location: { state: locationState } } = props;
  const { from } = locationState || { from: { pathname: '/dashboard' } };
  const [formAlert, setFormAlert] = useState('');
  const [loading, setLoading] = useState(false);
  const { setJwt, setBalance, setTransactions } = useContext(MainContext);

  const onSubmit = async () => {
    setLoading(true);
    const apiUrl = `https://jobcoin.gemini.com/granddad-coagulant/api/addresses/${inputs.address}`;
    axios.get(apiUrl).then((resp) => {
      if (resp.data) {
        const secret = 'secret';
      
        const token = jwt.encode({ tokenAddress: inputs.address }, secret);
        setJwt(token);
        setBalance(resp.data.balance);
        setTransactions(resp.data.transactions);
        setLoading(false);
        return props.history.push(from);
      }

      setLoading(false);
      return setFormAlert('There was an error processing your request.');
    }).catch(err => {
      setFormAlert('Please enter a valid address.');
      setLoading(false);
    });
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(onSubmit);

  return (
    <PageContainer>
      <FormContainer>
        <StyledLogo src={Logo} alt="logo"/>
        <h3>Jobcoin Login</h3>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input
            type="text" // need to change this once users with emails are available
            name="address"
            placeholder="Token address"
            onChange={handleInputChange}
            value={inputs.address || ''}
            style={{ marginBottom: '20px' }}
          />
          <Button
            disabled={loading}
            color="primary"
            intent="success"
            type="submit"
            style={{ width: '100%' }}
          >
            Login
          </Button>
          {formAlert !== '' && (
            <StyledAlert color="danger">
              <strong>Error: </strong>
              {formAlert}
            </StyledAlert>
          )}
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default withRouter(Login);
