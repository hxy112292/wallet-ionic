import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {Turnover} from '../entity/turnover';

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.page.html',
  styleUrls: ['./turnover.page.scss'],
})
export class TurnoverPage implements OnInit {

  turnoverList: Turnover[];

  constructor(private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {
    this.getTurnOver();
  }

  getTurnOver() {
    this.http.get(this.constant.baseUrl + '/tool/turnover').subscribe(res => {
      this.turnoverList = (res as any).data;
    });
  }

}
