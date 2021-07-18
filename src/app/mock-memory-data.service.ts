import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MockMemoryDataService implements InMemoryDbService {
  createDb() {
    const usersApiFirst = [
      { id: 11, nume: 'User 11' },
      { id: 12, nume: 'User 12' },
      { id: 13, nume: 'User 13' },
      { id: 14, nume: 'User 14' },
      { id: 15, nume: 'User 15' },
      { id: 16, nume: 'User 16' },
      { id: 17, nume: 'User 17' },
      { id: 18, nume: 'User 18' },
      { id: 19, nume: 'User 19' },
      { id: 20, nume: 'User 20' }
    ];
    const usersApiSecond = [
      { id: 21, nume: 'User 21' },
      { id: 22, nume: 'User 22' },
      { id: 23, nume: 'User 23' },
      { id: 24, nume: 'User 24' },
      { id: 25, nume: 'User 25' },
      { id: 26, nume: 'User 26' },
      { id: 27, nume: 'User 27' },
      { id: 28, nume: 'User 28' },
      { id: 29, nume: 'User 29' },
      { id: 30, nume: 'User 30' }
    ];

    const ages = [
      { id: 11, age: '11' },
      { id: 12, age: '12' },
      { id: 13, age: '13' },
      { id: 14, age: '14' },
      { id: 15, age: '15' },
      { id: 16, age: '16' },
      { id: 17, age: '17' },
      { id: 18, age: '18' },
      { id: 19, age: '19' },
      { id: 20, age: '20' },
      { id: 21, age: '21' },
      { id: 22, age: '22' },
      { id: 23, age: '23' },
      { id: 24, age: '24' },
      { id: 25, age: '25' },
      { id: 26, age: '26' },
      { id: 27, age: '27' },
      { id: 28, age: '28' },
      { id: 29, age: '29' },
      { id: 30, age: '30' }
    ];
    return { usersApiFirst, usersApiSecond, ages };
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the Users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
