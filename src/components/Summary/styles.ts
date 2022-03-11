import styled from "styled-components";

export const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: -4.5rem;
  
  div { 
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);
    
    header {
      font-size: 1rem;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.totalDiv {
      background: var(--green);
      color: var(--shape);
    }
  }

`;