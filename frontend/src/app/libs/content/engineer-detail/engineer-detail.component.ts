import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { HttpListService } from 'frontend/src/app/libs/service/http-engineer.service';

@Component({
  selector: 'app-engineer-detail',
  templateUrl: './engineer-detail.component.html',
  styleUrls: ['./engineer-detail.component.scss']
})
export class EngineerDetailComponent implements OnInit {

  private url: string = '/detail';

  address: string;

  constructor(
    private route: ActivatedRoute,
    private httpclient: HttpListService
  ) { }

  ngOnInit(): void {
    // 画面遷移指摘た時の選択したIDを取得
    const id:string = this.route.snapshot.paramMap.get('id');

    this.httpclient.getRow(this.url + '/' + id)
    .then(res => {
        console.log(res);
        this.address = res[0].address;
      }
    )
    .catch(err => {
      console.log(err);
    });

  }

}
