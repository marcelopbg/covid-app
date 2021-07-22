import { ICountrySummary } from "./ICountrySummary.model";
import { IGlobalSummary } from "./IGlobalSummary.model";

export interface ISummary
{
    id: string,
    message: string,
    global: IGlobalSummary,
    Countries: ICountrySummary[],
    date: Date
}