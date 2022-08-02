import styled from "styled-components"

export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    height: 20rem;
    background-color: rgba(191, 145, 6, 0.5);
    padding: 1rem 0;
    border-radius: 1rem;

    :hover {
        box-shadow: 0 0 2rem #f2b807;
    }

    h2 {
        text-transform: uppercase;
        margin: 0;
        color: #f2b807;
        letter-spacing: 3px;
    }    
`

export const PokemonImg = styled.img `
    width: 100%;
    height: 60%;
`

export const BoxButton = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;

    button {
        width: 8rem;
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
`