import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state = StateClient.ACTIVE;
  tva = 20;
  totalCaHt = 0;
  id!: number;
  name!: string;
  comment!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  public totalHT(): number {
    return this.totalCaHt;
  }
  public totalTTC(): number {
    return this.totalCaHt * (1 + this.tva / 100);
  }
}
