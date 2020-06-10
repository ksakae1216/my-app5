import { Component, OnInit } from '@angular/core';

import { EngineerApiService } from 'frontend/src/app/libs/service/engineer-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.scss']
})
export class ListComponent implements OnInit {

  private url = 'engineerDataList';

  constructor(private httpclient: EngineerApiService) { }

  displayedColumns: string[] = ['id', 'name', 'skill', 'status'];
  dataSource: object[];

  ngOnInit(): void {
    this.httpclient.getList(this.url)
      .subscribe(
        (res: any) => { this.dataSource = res; },
        err => { console.error(err); }
      );
  }

}
