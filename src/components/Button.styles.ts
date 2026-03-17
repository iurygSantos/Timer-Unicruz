import styled from "styled-components";

import { Button } from "./Button";

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps
{
    type ?: ButtonType
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['green-500']}; 

    &:hover 
    {
        opacity: 0.8;
    }
`

const buttonTypes = 
{
    primary:    '#007bff',
    secondary:  '#6c757d',
    danger:     '#dc3545',
    success:    '#28a745'
}
