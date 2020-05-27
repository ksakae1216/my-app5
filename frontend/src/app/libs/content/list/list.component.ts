import { Component, OnInit } from '@angular/core';

import { HttpListService } from 'frontend/src/app/libs/service/http-engineer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private url: string = '/list';

  constructor(private httpclient: HttpListService) { }

  displayedColumns: string[] = ['id', 'name', 'skill', 'status'];
  dataSource: object[];

  ngOnInit(): void {
    this.httpclient.getList(this.url)
      .then(res => {
          this.dataSource = res;
        }
      )
      .catch(err => {
        console.log(err);
      });
  }

}
