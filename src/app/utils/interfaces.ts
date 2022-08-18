export interface Isettings{
    sev: number; //severity level
    numSums:number;// number of sum
    isSessionActive:boolean;// determines current session state
    numCorrect:number;
    numAttempted:number;
}

export interface IsumOut {
    sum: string;
    ans: number;
    spoofs: number[];
}