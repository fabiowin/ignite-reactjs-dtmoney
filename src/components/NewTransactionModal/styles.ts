import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  red: '#E62E4D',
  green: '#33CC95'
}

export const Container = styled.form`

  h2 {
    font-size: 1.5rem;
    font-style: 'Poppins';
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    padding: 0 1.5rem;
    
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;  
`;

export const RadioBox = styled.button<RadioBoxProps>`

  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: .25rem;

  background: ${props => props.isActive  
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }



`;