import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {Concept} from '../../../../entity/concept';
import {ConceptDetail} from '../../../../entity/concept-detail';
import {LoaderService} from '../../../../service/loader.service';

@Component({
  selector: 'app-concept-detail',
  templateUrl: './concept-detail.page.html',
  styleUrls: ['./concept-detail.page.scss'],
})
export class ConceptDetailPage implements OnInit {

  concept: Concept;
  conceptDetailList: ConceptDetail[];

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.concept = JSON.parse(this.route.snapshot.paramMap.get('conceptInfo'));
    this.getConceptDetailList();
  }

  getConceptDetailList() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/concept/detail/', {
      params: {
        id: this.concept.id
      }
    }).subscribe(res => {
      this.conceptDetailList = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getConceptDetailList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }
}
