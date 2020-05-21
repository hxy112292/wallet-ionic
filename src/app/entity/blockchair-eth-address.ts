import {BlockchairEthAddressTransaction} from './blockchair-eth-address-transaction';

export class BlockchairEthAddress {

    balance: string;
    // tslint:disable-next-line:variable-name
    balance_usd: string;
    state: string;
    transactions: BlockchairEthAddressTransaction[];
}
