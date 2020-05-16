import {ListingLatestQuote} from './listing-latest-quote';

export class ListingLatest {

    id: string;
    name: string;
    symbol: string;
    slug: string;
    // tslint:disable-next-line:variable-name
    max_supply: string;
    // tslint:disable-next-line:variable-name
    circulating_supply: string;
    // tslint:disable-next-line:variable-name
    total_supply: string;
    platform: string;
    // tslint:disable-next-line:variable-name
    cmc_rank: string;
    quote: ListingLatestQuote;
}
