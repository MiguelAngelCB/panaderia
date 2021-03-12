import { Injectable } from '@angular/core';
import { NetworkInterface } from '@ionic-native/network-interface';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private _ip:string;

  constructor(private network:NetworkInterface) {
    this.obtenerIp();
  }

  async obtenerIp() {
    await this.network.getWiFiIPAddress().then(address => {
      this._ip=address.ip;
    })
    .catch(error => console.log(`Unable to get wifi IP: ${error}`));
    await this.network.getCarrierIPAddress().then(address => {
      this._ip=address.ip;
  })
    .catch(error => console.log(`Unable to get carrier IP: ${error}`));
  }

  get ip(): string {
    return this._ip;
  }
}
