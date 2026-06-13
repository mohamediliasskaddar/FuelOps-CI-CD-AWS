export interface HistoCarb {
  id?: number;
  date: string; // format YYYY-MM-DD
  prix: number;
  stationId?: number;
  carburantId?: number;
  carburant?: string;
  station?: string;
}
