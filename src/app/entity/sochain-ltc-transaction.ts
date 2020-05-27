import {SochainLtcTransactionOut} from './sochain-ltc-transaction-out';
import {SochainLtcTransactionIn} from './sochain-ltc-transaction-in';

export class SochainLtcTransaction {

    txid: string;
    confirmations: number;
    // tslint:disable-next-line:variable-name
    block_no: number;
    time: string;
    // tslint:disable-next-line:variable-name
    sent_value: string;
    fee: string;
    outgoing: SochainLtcTransactionOut;
    incoming: SochainLtcTransactionIn;
    outputs: SochainLtcTransactionOut[];
    inputs: SochainLtcTransactionIn[];
}
