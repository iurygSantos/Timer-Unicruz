import { HistoryContainer, HistoryList, StatusBadge } from "./styles";

type CycleStatus = "em-andamento" | "interrompido" | "concluido";

interface HistoryCycle {
    id: string;
    task: string;
    duration: number;
    startDate: string;
    status: CycleStatus;
}

const mockCycles: HistoryCycle[] = [
    {
        id: "1",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "em-andamento",
    },
    {
        id: "2",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "interrompido",
    },
    {
        id: "3",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "concluido",
    },
    {
        id: "4",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "interrompido",
    },
    {
        id: "5",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "concluido",
    },
    {
        id: "6",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "interrompido",
    },
    {
        id: "7",
        task: "Conserto de débitos técnicos",
        duration: 25,
        startDate: "Há cerca de 2 meses",
        status: "concluido",
    },
];

const statusConfig: Record<
    CycleStatus,
    { label: string; color: "yellow" | "red" | "green" }
> = {
    "em-andamento": { label: "Em andamento", color: "yellow" },
    interrompido: { label: "Interrompido", color: "red" },
    concluido: { label: "Concluído", color: "green" },
};

export function Historico() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockCycles.map((cycle) => {
                            const { label, color } = statusConfig[cycle.status];
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.duration} minutos</td>
                                    <td>{cycle.startDate}</td>
                                    <td>
                                        <StatusBadge statusColor={color}>
                                            {label}
                                        </StatusBadge>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}