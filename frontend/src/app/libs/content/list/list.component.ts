import { Component, OnInit } from '@angular/core';

import { HttpListService } from 'frontend/src/app/libs/service/http-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private httpclient: HttpListService) { }

  displayedColumns: string[] = ['id', 'name', 'skill', 'status'];
  // dataSource = ELEMENT_DATA;
  dataSource: object[];

  ngOnInit(): void {
    this.httpclient.get()
      .then(res => {
          this.dataSource = res;
        }
      )
      .catch(err => {
        console.log(err);
      });
    
  }

}
