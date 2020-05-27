import {CryptoBchTxScript} from './crypto-bch-tx-script';

export class CryptoBchTxout {

    amount: string;
    spent: boolean;
    addresses: string[];
    script: CryptoBchTxScript;
}
