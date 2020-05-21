import {BlockchairBtcTransactionInput} from './blockchair-btc-transaction-input';
import {BlockchairBtcTransactionOutput} from './blockchair-btc-transaction-output';

export class BlockchairBtcAddressTransaction {

    // tslint:disable-next-line:variable-name
    block_id: string;
    hash: string;
    time: string;
    // tslint:disable-next-line:variable-name
    balance_change: string;
    // tslint:disable-next-line:variable-name
    input_total: string;
    fee: string;
    state: string;
    inputs: BlockchairBtcTransactionInput[];
    outputs: BlockchairBtcTransactionOutput[];
}
