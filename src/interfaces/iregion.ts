import {ICitation} from './icitation';

export interface IRegion {
  GetCitationsByPlate: (plate: string, state: string) => Promise<ICitation[]>,
  ProcessCitationsForRequest: (citations: ICitation[], query_count: number) => Promise<Array<string>>
}

