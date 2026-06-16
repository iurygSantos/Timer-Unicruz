import { PlayIcon } from "@phosphor-icons/react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartContdownButton, TaskInput, MinutesAmountInput, MinutesInputContainer, ControlButton, Warning, ContainerWarning } from "./styles";
import { useState } from "react";

export function Home() {
    const [minutes, setMinutes] = useState(0);
    const [task, setTask] = useState<string>("");
    
    // Estado de hover do botão
    const [isHovering, setIsHovering] = useState(false);
    
    // Validação do formulário
    const isFormValid = task.trim().length > 0 && minutes > 0;
    
    // Controla se o ciclo está rodando
    const [isActive, setIsActive] = useState<boolean>(false); 

    function handleIncrement() 
    {
        setMinutes((prev) => {
            if (prev >= 60) return 60; // trava no máximo
            return prev + 5;
        });
    }

    function handleDecrement() 
    {
        setMinutes((prev) => {
            if (prev <= 0) return 0; // trava no mínimo
            return prev - 5;
        });
    }
    /**VALIDACAO */

    // Submit do formulário
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!isFormValid) return;

        console.log("Iniciou ciclo");
    }

    function handleStartCycle() {
        // Só inicia se estiver válido
        if (!isFormValid) return;

        setIsActive(true); // Ativa o ciclo
    }

    function handleStopCycle() {
        setIsActive(false); // Interrompe o ciclo
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <label htmlFor="task"> Vou trabalhar em </label>

                    <TaskInput id="task" type="text" placeholder="Dê um nome para seu projeto" list="task-suggestions"   
                    value={task} // valor vem do state
                    onChange={(e) => setTask(e.target.value)} // atualiza o state
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist>

                    <label htmlFor="minutesAmount"> durante </label>

                    <MinutesInputContainer className="minutes-input">
                        <ControlButton type="button" onClick={handleDecrement}> - </ControlButton>

                        <MinutesAmountInput
                            id="minutesAmount"
                            type="number"
                            value={minutes === 0 ? "00" : minutes.toString().padStart(2, '0')}
                            onChange={(e) => setMinutes(Number(e.target.value))}
                            placeholder="00" step={5} min={0} max={59}
                            />

                        <ControlButton type="button" onClick={handleIncrement}> + </ControlButton>
                    </MinutesInputContainer>

                    {/*<MinutesAmountInput id="minutesAmount" type="number" placeholder="00" step={5} min={0} max={59}  /> */}

                    <span> minutos. </span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <ContainerWarning className="button-container">
                    {/* Warning só aparece no hover + inválido */}
                    {isHovering && !isFormValid && (
                        <Warning>
                        Preencha o nome e a duração para começar.
                        </Warning>
                    )}
                    
                    {!isActive ? (

                        <StartContdownButton type="submit"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={handleStartCycle}
                        disabled={!isFormValid} 
                        >
                            <PlayIcon size={24} /> Começar
                        </StartContdownButton>
                    ) : (
                        <StartContdownButton type="button" onClick={handleStopCycle}>
                            Parar
                        </StartContdownButton>
                    )}
                </ContainerWarning>
            </form>
        </HomeContainer>
    )
}