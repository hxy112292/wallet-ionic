import {CryptoBchTxin} from './crypto-bch-txin';
import {CryptoBchTxout} from './crypto-bch-txout';

export class CryptoBchTx {

    txid: string;
    datetime: string;
    confirmations: string;
    value: number;
    fee: number;
    blockheight: string;
    txins: CryptoBchTxin[];
    txouts: CryptoBchTxout[];
}
