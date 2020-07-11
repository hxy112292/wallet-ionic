import {SochainBtcTransactionOut} from './sochain-btc-transaction-out';
import {SochainBtcTransactionIn} from './sochain-btc-transaction-in';

export class SochainBtcTransaction {

    txid: string;
    confirmations: number;
    // tslint:disable-next-line:variable-name
    block_no: number;
    time: string;
    // tslint:disable-next-line:variable-name
    sent_value: string;
    fee: string;
    outgoing: SochainBtcTransactionOut;
    incoming: SochainBtcTransactionIn;
    outputs: SochainBtcTransactionOut[];
    inputs: SochainBtcTransactionIn[];
}
