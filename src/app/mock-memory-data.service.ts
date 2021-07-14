import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MockMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, nume: 'Dr Nice' },
      { id: 12, nume: 'Narco' },
      { id: 13, nume: 'Bombasto' },
      { id: 14, nume: 'Celeritas' },
      { id: 15, nume: 'Magneta' },
      { id: 16, nume: 'RubberMan' },
      { id: 17, nume: 'Dynama' },
      { id: 18, nume: 'Dr IQ' },
      { id: 19, nume: 'Magma' },
      { id: 20, nume: 'Tornado' }
    ];
    return { users };
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
