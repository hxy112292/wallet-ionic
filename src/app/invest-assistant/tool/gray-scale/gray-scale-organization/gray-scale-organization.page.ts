import {Component, Input, OnInit} from '@angular/core';
import {GrayScaleOrganization} from '../../../../entity/gray-scale-organization';

@Component({
  selector: 'app-gray-scale-organization',
  templateUrl: './gray-scale-organization.page.html',
  styleUrls: ['./gray-scale-organization.page.scss'],
})
export class GrayScaleOrganizationPage implements OnInit {

  @Input() grayScaleOrganizationList: GrayScaleOrganization[];

  constructor() { }

  ngOnInit() {
  }

}
