import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Not found     <a routerLink="/">Go Home</a>
    </div>
  `
})

export class NotFoundComponent {}
