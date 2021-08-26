import styled from "styled-components";


export const ImgArea=styled.div`
    
    display: flex;
    justify-content: center;
    align-items:center;
`;
export const Img= styled.img`
    border: 5px solid #e76a24;
    text-align: center;
    border-radius: 100%;
    justify-content: center;
    align-self: center;
    width: 50%;
`;
export const Icon= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    a{
        padding: 5px 2rem;
        color: #800000;       
   
        i{
            font-size: 45px;
            transition:200ms;
            &:hover{
                font-size: 50px;
        }
        }
    }


`;
