import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Concept} from '../../../entity/concept';
import {TxHistory} from '../../../entity/tx-history';
import {Router} from '@angular/router';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.page.html',
  styleUrls: ['./concept.page.scss'],
})
export class ConceptPage implements OnInit {

  conceptList: Concept[];
  sort: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.sort = 'change';
    this.getConceptList();
  }

  getConceptList() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/concept', {
      params: {
        sort: this.sort
      }
    }).subscribe(res => {
      this.conceptList = (res as any).data.list;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getConceptList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toDetail(concept: Concept) {
    this.router.navigate(['concept-detail', {conceptInfo: JSON.stringify(concept)}]);
  }
}
