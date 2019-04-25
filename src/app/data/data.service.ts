import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const users = [];
    for (let i = 0; i < 100000; i++) {
      users.push({name: 'Ivanov Ivan Ivanovich', post: 'Specialist', city: 'Moscow', age: '23'});
    }
    return {users};
  }
}


