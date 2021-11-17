import { StateClient } from '../enums/state-client';

export interface ClientI {
  state: StateClient;
  tva: number;
  totalCaHt: number;
  id: number;
  name: string;
  comment: string;
}
