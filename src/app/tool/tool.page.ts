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

  toConcept() {
    this.router.navigate(['tabs/tool/concept']);
  }

  toGitDev() {
    this.router.navigate(['tabs/tool/git-dev']);
  }

  toTurnOver() {
    this.router.navigate(['tabs/tool/turnover']);
  }

  toMonitor() {
    this.router.navigate(['tabs/tool/monitor-blockchain']);
  }

  toHotWeb() {
    this.router.navigate(['tabs/tool/hot-web']);
  }

  toBlockchainBrowser() {
    this.router.navigate(['tabs/tool/blockchain-browser']);
  }
}
