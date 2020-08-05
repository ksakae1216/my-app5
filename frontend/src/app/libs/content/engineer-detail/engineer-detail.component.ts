import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EngineerApiService } from 'frontend/src/app/libs/service/engineer-api.service';

interface EngineerStructure {
  id: number;
  name: string;
  skill: string;
  status: string;
  address: string;
  age: number;
  skilldetail: string;
}

interface EngineerSkill {
  key: string;
  value: string;
}

@Component({
  selector: 'app-engineer-detail',
  templateUrl: './engineer-detail.component.html',
  styleUrls: ['./engineer-detail.component.scss']
})

export class EngineerDetailComponent implements OnInit {

  // engineerDetailFormGroup: FormGroup;
  engineerDetailFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    skill: new FormControl(),
    status: new FormControl(),
    address: new FormControl(),
    age: new FormControl(),
    skilldetail: new FormControl()
  });

  private url = 'engineerDetail';

  skills: EngineerSkill[] = [
    {key: 'skill-super', value: 'Super'},
    {key: 'skill-high', value: 'High'},
    {key: 'skill-normal', value: 'Normal'},
    {key: 'skill-beginner', value: 'Beginner'}
  ];

  constructor(
    private route: ActivatedRoute,
    private httpclient: EngineerApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // 画面遷移指摘た時の選択したIDを取得
    const id = this.route.snapshot.paramMap.get('id');

    this.httpclient.getRow(this.url + '/' + id)
      .subscribe(
        (res: EngineerStructure) => {
          this.engineerDetailFormGroup.setValue(res);
        },
        err => { console.error(err); }
      );

  }

  saveData() {
    console.log('clicked saveData button!!');

    const inputValue = this.engineerDetailFormGroup.value;

    console.log('input value -> ', inputValue);

    this.httpclient.setRow(inputValue.id,
                            inputValue.name,
                            inputValue.skill,
                            inputValue.status,
                            inputValue.address,
                            inputValue.age,
                            inputValue.skilldetail);

    this.snackBar.open('登録が完了しました', 'CLOSE', {duration: 5000});

    this.router.navigate(['engineer-list']);
  }

}
