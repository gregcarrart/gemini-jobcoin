import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../contexts';
import LogoImg from '../images/logo.png';

const StyledNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: #ccc;
  height: 60px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding: 0 25px;
`;

const StyledNavLogo = styled.h1`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: auto;
    margin-right: 15px;
  }
`;

const StyledNavControls = styled.div`
  font-size: 14px;
`;

const Navbar = () => {
  const { setJwt } = useContext(MainContext);
  const signOut = () => {
    setJwt('');
  }

  return (
    <StyledNav>
      <StyledNavInner>
        <StyledNavLogo><img src={LogoImg} alt="logo"/> Jobcoin Sender</StyledNavLogo>
        <StyledNavControls>Signed in <button onClick={() => signOut()}>Sign Out</button></StyledNavControls>
      </StyledNavInner>
    </StyledNav>
  )
}

export default Navbar;