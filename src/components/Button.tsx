import { ButtonContainer, type ButtonType } from "./Button.styles";

interface ButtonsProps 
{
    type ?: ButtonType
}

export function Button({ type = 'primary' }: ButtonsProps) 
{
    return (
        <ButtonContainer type={ type }>
            Enviar
        </ButtonContainer>
    )
}