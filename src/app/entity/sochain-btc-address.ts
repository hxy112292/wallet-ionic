import {SochainBtcTransaction} from './sochain-btc-transaction';

export class SochainBtcAddress {

    address: string;
    balance: string;
    // tslint:disable-next-line:variable-name
    value_usd: number;
    txs: SochainBtcTransaction[];
}
