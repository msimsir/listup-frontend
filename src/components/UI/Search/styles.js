import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  position: relative;

  & > svg {
    position: absolute;
    top: 0.7rem;
    left: 1rem;
    color: rgba(112, 112, 112, 0.5);
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 2.5rem;
  padding-left: 3rem;
  border-radius: 0.625rem;
  background-color: rgba(112, 112, 112, 0.2);
  position: relative;
  &::placeholder {
    font-weight: 300;
  }

  &:focus {
    border: 1px solid rgba(112, 112, 112, 0.4);
  }
`;
