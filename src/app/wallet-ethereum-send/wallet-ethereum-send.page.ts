import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Clipboard} from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-wallet-ethereum-send',
  templateUrl: './wallet-ethereum-send.page.html',
  styleUrls: ['./wallet-ethereum-send.page.scss'],
})
export class WalletEthereumSendPage implements OnInit {

  privateKey: PrivateKey;
  recipientAddr: string;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private clipboard: Clipboard,) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }

  qrScan() {
    this.barcodeScanner
        .scan()
        .then(barcodeData => {
          this.recipientAddr = barcodeData.text;
        })
        .catch(err => {
          console.log('Error', err);
        });
  }

  paste() {
    this.clipboard.paste().then((resolve: string) => {
      this.recipientAddr = resolve;
    });
  }
}
