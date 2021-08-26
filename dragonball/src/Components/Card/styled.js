import styled from 'styled-components';

export const CardArea = styled.div`
  background-color:  #e79a12;
  padding: 1rem;
  border: 2px solid  black;
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
  cursor: pointer;
  transition: 200ms;
  height: 15rem;
  overflow: hidden;

  &:hover {
    margin: 0.8rem;
    
  }
`;

export const CardImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  transition: 200ms;
  border: 1px solid black;
  &:hover{
    width: 11rem;
  height: 11rem;
  }
`;

export const Name = styled.h3`
  color: #800000;
  text-align: center;
  padding: 0.5rem;
  font-size: 1.3em;
`;
