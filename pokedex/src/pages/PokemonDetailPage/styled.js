import styled from "styled-components";

export const ContainerPage = styled.div`
    background-color: #000;
    min-height: 100vh;
    width: 100%;
`

export const PageContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
`

export const BoxDetails = styled.div`
    display: flex;
    background-color: rgba(191, 145, 6, 0.5);
    border: 1px solid;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 3rem;
    border-radius: 1rem;
    flex-wrap: wrap;
    gap: 2rem;

    img { 
        width: 20rem;
    }
`

export const StatsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

export const BoxNameType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h1 {
        margin: 0;
        font-size: 4rem;
        padding-left: 1rem;
        text-transform: uppercase;
        color: #f2b807;
        letter-spacing: 3px;
    }
`

export const TypeContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    padding: 0 0 0 1rem;
    font-size: 2rem;
    color: #f2b807;

    h3 {
        padding: 0;
        margin: 0;
        letter-spacing: 3px;
    }

    p {
        padding: 0;
        margin: 0;
        letter-spacing: 3px;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 1.3rem;
`

export const PowerCard = styled.div`
    padding: 0 3rem 0 1rem;
    color: #f2b807;
    letter-spacing: 2px;
    box-shadow: 0 0 2rem black;
    border-radius: 1rem;

    :hover {
        box-shadow: 0 0 2rem #f2b807;;
    }
`

export const AttackCard = styled.div`
    padding: 0 3rem 0 1rem;
    color: #f2b807;
    letter-spacing: 2px;
    box-shadow: 0 0 2rem black;
    border-radius: 1rem;
    
    :hover {
        box-shadow: 0 0 2rem #f2b807;
    }
`
