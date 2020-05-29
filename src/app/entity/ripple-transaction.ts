import {RippleTransactionOutcome} from './ripple-transaction-outcome';
import {RippleTransactionSpecification} from './ripple-transaction-specification';

export class RippleTransaction {

    id: string;
    outcome: RippleTransactionOutcome;
    specification: RippleTransactionSpecification;
}
