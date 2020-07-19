import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class EngineerDataService implements InMemoryDbService {

  private api: any = {
    engineerDataList: [
      {
        id: 1,
        name: 'sato',
        skill: 'A',
        status: 'Working'
      },
      {
        id: 2,
        name: 'kato',
        skill: 'S',
        status: 'Empty'
      },
      {
        id: 3,
        name: 'ito',
        skill: 'C',
        status: 'Working'
      }
    ],
    engineerDetail: [
      {
        id: 1,
        name: 'sato',
        skill: 'A',
        status: 'Working',
        address: 'Tokyo',
        age: 30,
        skilldetail: 'Angular, PostgreSQL'
      },
      {
        id: 2,
        name: 'kato',
        skill: 'S',
        status: 'Empty',
        address: 'Saitama',
        age: 35,
        skilldetail: 'React, Java, Python'
      },
      {
        id: 3,
        name: 'ito',
        skill: 'C',
        status: 'Working',
        address: 'Saitama',
        age: 35,
        skilldetail: 'React, Java, Python'
      }
    ]
  };

  public createDb(): any {
    // create mock data
    return this.api;
  }

  public setEngineerDetailRow(
    id: number, name: string, skill: string, status: string, address: string, age: number, skillDetail: string
    ): boolean {

    return true;
  }

}
