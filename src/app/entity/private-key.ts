import {Erc20Token} from './erc20-token';

export class PrivateKey {

    mnemonic: string;
    btcPrivateKey: string;
    btcAddress: string;
    ethPrivateKey: string;
    ethAddress: string;
    ltcPrivateKey: string;
    ltcAddress: string;
    bchPrivateKey: string;
    bchAddress: string;
    xrpPrivateKey: string;
    xrpAddress: string;
    xrpKeyPair: string;
    erc20TokenList: Erc20Token[];
    password: string;
}
