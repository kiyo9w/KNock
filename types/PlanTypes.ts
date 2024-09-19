export interface Plan {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    backgroundImage?: string;
    type: 'sleep' | 'meditation' | 'other';
}