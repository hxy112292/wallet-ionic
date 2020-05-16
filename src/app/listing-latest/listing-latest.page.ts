import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {ListingLatest} from '../entity/listing-latest';

@Component({
  selector: 'app-listing-latest',
  templateUrl: './listing-latest.page.html',
  styleUrls: ['./listing-latest.page.scss'],
})
export class ListingLatestPage implements OnInit {

  listingLatestList: ListingLatest[];

  constructor(private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {
    this.getListing();
  }

  getListing() {
    this.http.get(this.constant.baseUrl + '/listingLatest').subscribe(res => {
      this.listingLatestList = (res as any).data;
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

}
