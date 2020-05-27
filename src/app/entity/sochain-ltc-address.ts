import {SochainLtcTransaction} from './sochain-ltc-transaction';

export class SochainLtcAddress {

    address: string;
    balance: string;
    // tslint:disable-next-line:variable-name
    value_usd: number;
    txs: SochainLtcTransaction[];
}
