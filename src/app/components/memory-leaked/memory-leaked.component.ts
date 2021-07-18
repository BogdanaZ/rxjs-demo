import { Component } from '@angular/core';

@Component({
  selector: 'parent-leaked',
  template: `
    <h2 class="mb-5">Memory Leaked - example</h2>
    <button class="btn btn-primary mr-1" (click)="relive()">
      Relive
    </button>
    <button class="btn btn-danger" (click)="destroy()">
      Destroy
    </button>
    <app-child-memory-leaked *ngIf="isAlive"></app-child-memory-leaked>
  `
})
export class MemoryLeakedComponent {
  isAlive = false;
  constructor() {}

  destroy() {
    this.isAlive = false;
  }

  public relive() {
    this.isAlive = true;
  }
}
