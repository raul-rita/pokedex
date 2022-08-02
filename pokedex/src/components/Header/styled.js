import styled from "styled-components";

export const HeaderContent = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    background-color: rgba(191, 145, 6, 0.5);
    padding: 1rem 0;
    border-bottom: 2px solid #F2B807;

    button {
        width: 10rem;
        height: 3rem;
        background-color: #223059;
        color: #F2B807;
        text-transform: uppercase;
        font-weight: bold;
        border-color: #416BBF;
        border-radius: 0.5rem;
    }

    button:hover {
        background-color: #416BBF;
        border-color: #F2B807;
    }
    
    img{
        width: 12rem;
    }
`