import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private _ip:string;

  constructor() {
    this.obtenerIp();
  }

  public obtenerIp() {
    this._ip="192.168.1.123";
  }

  get ip(): string {
    return this._ip;
  }
}
