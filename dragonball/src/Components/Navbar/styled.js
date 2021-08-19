import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar=styled.div`
    width: 100vw;
    background-color: #e76a24;
    display: flex;
    justify-content: space-between;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    padding: 0 2rem;

    @media(max-width:580px){
        flex-direction:column;
        align-items: center;
    }
    `;

export const Img=styled.img`
    width: 10rem;
    padding: 0.5rem 0;
`;

export const List= styled.ul`
    display: flex;
    align-self: center;
    justify-content: space-between;
    @media(max-width:430px){
        flex-direction:column;
        
    }
`;
export const ListItem= styled.li`
    list-style: none;
    padding: 1.2rem 1rem;
    /* colocando o hover tem sass nele tambem */
    &:hover{
        background-color: #b15019;
    }
`;

export const LinkedPage=styled(Link)`
    text-decoration: none;
    color: white;
`;