import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EngineerApiService } from 'frontend/src/app/libs/service/engineer-api.service';

interface EngineerStructure {
  address: string;
}

@Component({
  selector: 'app-engineer-detail',
  templateUrl: './engineer-detail.component.html',
  styleUrls: ['./engineer-detail.component.scss']
})
export class EngineerDetailComponent implements OnInit {

  private url = 'engineerDetail';

  address: string;

  constructor(
    private route: ActivatedRoute,
    private httpclient: EngineerApiService
  ) { }

  ngOnInit(): void {
    // 画面遷移指摘た時の選択したIDを取得
    const id = this.route.snapshot.paramMap.get('id');

    this.httpclient.getRow(this.url + '/' + id)
      .subscribe(
        (res: EngineerStructure) => { this.address = res.address; },
        err => { console.error(err); }
      );
  }

}
