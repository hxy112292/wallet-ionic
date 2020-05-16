import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {Concept} from '../entity/concept';
import {TxHistory} from '../entity/tx-history';
import {Router} from '@angular/router';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.page.html',
  styleUrls: ['./concept.page.scss'],
})
export class ConceptPage implements OnInit {

  conceptList: Concept[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.getConceptList();
  }

  getConceptList() {
    this.http.get(this.constant.baseUrl + '/concept').subscribe(res => {
      this.conceptList = (res as any).data;
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
    this.router.navigate(['tabs/tool/concept-detail', {conceptInfo: JSON.stringify(concept)}]);
  }
}
