export interface Carburant {
  id?: number;
  nom: string;
  description: string;
}

export interface HistoCarb {
  id?: number;
  date: string; // format YYYY-MM-DD
  prix: number;
  stationNom?: string;
  stationVille?: string;
  carburantNom?: string;
  stationId?: number;
  carburantId?: number;
}

export interface Station {
  id?: number;
  nom: string;
  ville: string;
  adresse: string;
}
