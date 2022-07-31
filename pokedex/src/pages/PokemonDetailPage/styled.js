import styled from "styled-components";

export const PageContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const BoxDetails = styled.div`
    display: flex;
    border: 1px solid;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 5rem;
`

export const StatsBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    width: 60%;
`

export const BoxNameType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: blue;

    h1 {
        margin: 0;
        padding-left: 1rem;
        border: 1px solid;
        text-transform: uppercase;
    }
`

export const TypeContent = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 1rem;
    border: 1px solid;
`

export const Box = styled.div`
    display: flex;
    border: 1px solid;
    justify-content: space-around;
`

export const PowerCard = styled.div`
    border: 1px solid;
    padding: 0 3rem 0 1rem;
`

export const AttackCard = styled.div`
    border: 1px solid;
    padding: 0 3rem 0 1rem;
`
