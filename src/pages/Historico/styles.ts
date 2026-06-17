import styled from "styled-components"

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 20px 3.5rem 3.5rem 3.5rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${(props) => props.theme['gray-600']};
            padding: 1rem;
            text-align: left;
            color: ${(props) => props.theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-radius: 8px 0 0 0;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-radius: 0 8px 0 0;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: ${(props) => props.theme['gray-700']};
            border-top: 4px solid ${(props) => props.theme['gray-800']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
            color: ${(props) => props.theme['gray-300']};

            &:first-child {
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const

interface StatusBadgeProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const StatusBadge = styled.span<StatusBadgeProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`

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

