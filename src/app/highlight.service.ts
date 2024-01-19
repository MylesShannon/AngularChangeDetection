import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  do(el: ElementRef) {
    const node = el.nativeElement.querySelector('.node');
    node.classList.add('checked');
    setTimeout(() => {
      node.classList.remove('checked');
    }, 500);
  }
}
