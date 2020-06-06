import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class EngineerDataService implements InMemoryDbService {

  private api: any = {
    engineerDataList: [
      {
        "id": 1,
        "name": "sato",
        "skill": "A",
        "status": "Working"
      },
      {
        "id": 2,
        "name": "kato",
        "skill": "S",
        "status": "Empty"
      },
      {
        "id": 3,
        "name": "ito",
        "skill": "C",
        "status": "Working"
      }
    ],
    engineerDetail: [
      {
        "address": "Tokyo",
        "skill": "A",
        "name": "sato",
        "id": 1,
        "skillDetail": "Angular, PostgreSQL",
        "age": 30,
        "status": "Working"
      },
      {
        "id": 2,
        "name": "kato",
        "skill": "S",
        "status": "Empty",
        "address": "Saitama",
        "age": 35,
        "skillDetail": "React, Java, Python"
      },
      {
        "id": 3,
        "name": "ito",
        "skill": "C",
        "status": "Working",
        "address": "Saitama",
        "age": 35,
        "skillDetail": "React, Java, Python"
      }
    ]
  }
  public createDb(): any {
    return this.api;
  }

  public getEnginnerDataList(): any {
    return this.api.engineerDataList;
  }
}
