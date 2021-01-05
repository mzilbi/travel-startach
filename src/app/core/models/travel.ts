import { State } from "./state";

export interface Travel {
    state: State;
    startDate: Date;
    endDate: Date;
    note?:string;
}