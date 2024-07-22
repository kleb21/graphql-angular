import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  constructor() {}

  private readonly _createOrEditFlag = signal(false);
  private readonly idSignal = signal("");

  public createOrEditSignal = this._createOrEditFlag.asReadonly();

  setcreateOrEditSignal(value: boolean) {
    this._createOrEditFlag.set(value);
  }


  public IdtoUpdate = this.idSignal.asReadonly();

  setIdtoUpdate(value: string) {
    this.idSignal.set(value);
  }
}
