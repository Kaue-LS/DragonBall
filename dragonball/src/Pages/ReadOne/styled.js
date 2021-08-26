import styled from "styled-components";
export const Card =styled.div`
    width: auto;
    display: flex;
    padding: 1rem 2rem;
      background-color:  #e79a12;
    border:5px solid #e76a24;
    flex-direction: column;
    margin: 0 auto;


`;

export const ImgBlock = styled.div`
    background-image:url('https://pm1.narvii.com/6529/c80699240da7b0c6882418aec3468bce31e45921_hq.jpg') ;
    background-size: 100% 100%;
    
    display: flex;
    flex-direction: center;
    justify-content: center;
    border: 2px solid ;
`;

export const Img = styled.img`
    max-width: 20rem;
    min-width:15rem ;
    border-radius:0.5rem;
    max-height: 20rem;
    min-height: 15rem;
    margin: 0.5rem;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;

`;


export const ButtonArea =styled.div`
    display:flex;
    justify-content: space-evenly;
    padding:1rem 0;
`;
export const ButtonDelete =styled.button`
    background-color: #e72a99;
    color:white;
    font-size:1.2rem;
    padding:0.4rem 1rem;
    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: #8b008b;
    }
`;

export const Text= styled.p`
    font-size:1.2em;
    padding: 0.5rem 0;
`;

export const ButtonEdit =styled.button`
    background-color: 	#32CD32;
    color:white;
    font-size:1.2rem;
    padding:0.4rem 1rem;
    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: #006400;
    }
`;

export const PowerArea = styled.div`
    display: flex;
    align-items: center;
`;