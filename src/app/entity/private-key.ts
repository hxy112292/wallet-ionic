import {Erc20Token} from './erc20-token';
import {XrpKeyPair} from './xrp-key-pair';

export class PrivateKey {

    isHDWallet: boolean;
    network: string;
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
    xrpKeyPair: XrpKeyPair;
    erc20TokenList: Erc20Token[];
    password: string;
}
