import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder} from '@angular/forms';

import { EngineerApiService } from 'frontend/src/app/libs/service/engineer-api.service';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface EngineerStructure {
  id: number;
  name: string;
  skill: string;
  status: string;
  address: string;
  age: number;
  skilldetail: string;
}

@Component({
  selector: 'app-engineer-detail',
  templateUrl: './engineer-detail.component.html',
  styleUrls: ['./engineer-detail.component.scss']
})

export class EngineerDetailComponent implements OnInit {

  engineerDetailFormGroup: FormGroup;

  private url = 'engineerDetail';

  id: number;
  name: string;
  skill: string;
  status: string;
  address: string;
  age: number;
  skillDetail: string;

  constructor(
    private route: ActivatedRoute,
    private httpclient: EngineerApiService,
  ) { }

  ngOnInit(): void {
    // 画面遷移指摘た時の選択したIDを取得
    const id = this.route.snapshot.paramMap.get('id');

    this.engineerDetailFormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      skill: new FormControl(),
      status: new FormControl(),
      address: new FormControl(),
      age: new FormControl(),
      skillDetail: new FormControl()
    });

    this.httpclient.getRow(this.url + '/' + id)
      .subscribe(
        (res: EngineerStructure) => {
          this.id = res.id;
          this.name = res.name;
          this.skill = res.skill;
          this.status = res.status;
          this.address = res.address;
          this.age = res.age;
          this.skillDetail = res.skilldetail;
        },
        err => { console.error(err); }
      );

  }

  saveData() {
    console.log('clicked saveData button!!');
    const controls = this.engineerDetailFormGroup.controls;

    // 画面で値を変更するとvalueがセットされる。変更してない場合はnull
    if (controls.id.value !== null) { this.id = controls.id.value; }
    if (controls.name.value !== null) { this.name = controls.name.value; }
    if (controls.skill.value !== null) { this.skill = controls.skill.value; }
    if (controls.status.value !== null) { this.status = controls.status.value; }
    if (controls.address.value !== null) { this.address = controls.address.value; }
    if (controls.age.value !== null) { this.age = controls.age.value; }
    if (controls.skillDetail.value !== null) { this.skillDetail = controls.skillDetail.value; }

    this.httpclient.setRow(this.id, this.name, this.skill, this.status, this.address, this.age, this.skillDetail);
  }

}
