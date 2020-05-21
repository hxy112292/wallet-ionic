import {BlockchairBtcAddressTransaction} from './blockchair-btc-address-transaction';

export class BlockchairBtcAddress {

    balance: string;
    // tslint:disable-next-line:variable-name
    balance_usd: string;
    state: string;
    transactions: BlockchairBtcAddressTransaction[];
}
