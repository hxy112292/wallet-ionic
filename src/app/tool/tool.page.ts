import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.page.html',
  styleUrls: ['./tool.page.scss'],
})
export class ToolPage implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toHotCoin() {
    this.router.navigate(['tabs/tool/hot-coin']);
  }
}
