import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardArea = styled.div`
  margin: 1rem 0;
  background-color:  #e79a52;
    border:5px solid #e76a24;
    border-radius: 15px;
  max-width: 100%;
  height: auto;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;

`;

export const Linked = styled(Link)`
  text-decoration: none;
`;

export const Empty = styled.h3`
  color: #e76a24;
  background-color: #ffffff;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
