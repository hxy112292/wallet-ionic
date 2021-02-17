import {Serializable} from 'child_process';

// @ts-ignore
export class LitecoreUtxo implements Serializable {
    address: string;
    txid: string;
    vout: number;
    scriptPubKey: string;
    satoshis: number;
}
