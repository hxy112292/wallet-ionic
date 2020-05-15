import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {Concept} from '../entity/concept';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.page.html',
  styleUrls: ['./concept.page.scss'],
})
export class ConceptPage implements OnInit {

  conceptList: Concept[];

  constructor(private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {
    this.getConceptList();
  }

  getConceptList() {
    this.http.get(this.constant.baseUrl + '/concept').subscribe(res => {
      this.conceptList = (res as any).data.list;
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
}
