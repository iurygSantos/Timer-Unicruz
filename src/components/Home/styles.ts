import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    form
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
        
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.120rem;
    font-weight: bold;
    flex-wrap: wrap;
`


export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    font-weight: bold;
    /* line-heigth: 80%; */
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background-color: ${(props) => props.theme['gray-700']};
        padding: 2.5rem 1rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    font-size: 14rem;
    font-weight: bold;
`



const baseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    font-weight: bold;
    font-size: 1.120rem;
    padding: 0 0.5rem; 
    color:  ${(props) => props.theme['gray-100']};
    -moz-appearance: textfield;     /** RETIRA AS SETAS DO CAMPO NUMBER  Firefox */

    &::placeholder 
    {
        box-shadow: none;
        color: ${(props) => props.theme['gray-500']};
    }

    /* RETIRA AS SETAS DO CAMPO NUMBER Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const MinutesInputContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    padding: 0 0.5rem;

`

export const ControlButton = styled.button`
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-500']};
    font-size: 1.2rem;
    cursor: pointer;
`

export const TaskInput = styled(baseInput)`
    flex: 1;
    padding: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
`

export const MinutesAmountInput = styled(baseInput)`
    width: 2.5rem;
    text-align: center;
`

export const StartContdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']};

    &:disabled 
    {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    &:not(:disable):hover 
    {
        background: ${(props) => props.theme['green-700']};
    }

    &:hover 
    {
        background: ${(props) => props.theme['green-700']};
        cursor: not-allowed;
    }
    
`

export const ButtonStop = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    background: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['gray-100']};

    &:disabled 
    {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    &:not(:disable):hover 
    {
        background: ${(props) => props.theme['red-700']};
    }

    &:hover 
    {
        background: ${(props) => props.theme['red-700']};
        cursor: not-allowed;
    }
    
`

export const ContainerWarning = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Warning = styled.span`
    position: absolute;
    bottom: 100%;
    margin-bottom: 8px;

    font-weight: 700;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    background-color: black;
`;