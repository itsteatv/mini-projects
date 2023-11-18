import { useQuery } from '@tanstack/react-query';

interface Advice {
    id: number;
    advice: string;
}

const fetchAdvice = async (): Promise<Advice> => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data);
    return data.slip;
};

export function useAdvice() {
    const { isLoading, data: advice } = useQuery({
        queryKey: ['advice'],
        queryFn: fetchAdvice,
    });

    return { isLoading, advice }
}
