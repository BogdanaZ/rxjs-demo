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
    <app-child-memory-leaked *ngIf="goLive"></app-child-memory-leaked>
  `
})
export class MemoryLeakedComponent {
  goLive = false;
  constructor() {}

  destroy() {
    this.goLive = false;
  }

  public relive() {
    this.goLive = true;
  }
}
