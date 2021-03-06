import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LoaderIcon = styled.div`
  border: 0.2em solid rgba(56, 62, 86, 0.5);
  border-top: 0.2em solid #3e3e56;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderIcon />
    </LoaderWrapper>
  );
};

export default Loader;
