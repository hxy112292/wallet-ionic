import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../service/constant.service';
import {ListingLatest} from '../entity/listing-latest';
import {Router} from '@angular/router';
import {LoaderService} from '../service/loader.service';

@Component({
  selector: 'app-listing-latest',
  templateUrl: './listing-latest.page.html',
  styleUrls: ['./listing-latest.page.scss'],
})
export class ListingLatestPage implements OnInit {

  listingLatestList: ListingLatest[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.getListing();
  }

  getListing() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest').subscribe(res => {
      this.listingLatestList = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getListing();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinSearch() {
    this.router.navigate(['coin-search']);
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }
}
