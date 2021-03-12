import { NetworkInterface } from '@ionic-native/network-interface';
export class NetworkInterfaceMock extends NetworkInterface {
    /**
     * Gets the WiFi IP address
     * @return {Promise<any>} Returns a Promise that resolves with the IP address information.
     */
    getWiFiIPAddress(): Promise<any>{
      return new Promise<any>((resolve) =>{
        resolve({ip:"192.168.1.12",subnet:""});
      })
    };
    /**
     * Gets the wireless carrier IP address
     * @return {Promise<any>} Returns a Promise that resolves with the IP address information.
     */
    getCarrierIPAddress(): Promise<any>{
      return new Promise<any>((reject) =>{
        reject({ip:"16.15.18.13",subnet:""});
      })
    };
}
