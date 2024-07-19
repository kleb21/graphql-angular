import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  constructor() {}

  private booleanSignal: WritableSignal<boolean> = signal(false);

  getBooleanSignal() {
    return this.booleanSignal;
  }

  setBooleanSignal(value: boolean) {
    this.booleanSignal.set(value);
  }

  private idSignal: WritableSignal<string> = signal("");

  getIdtoUpdate() {
    return this.idSignal;
  }

  setIdtoUpdate(value: string) {
    this.idSignal.set(value);
  }
}
