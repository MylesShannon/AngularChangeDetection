import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-seven',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './seven.component.html',
  styleUrl: './seven.component.scss'
})
export class SevenComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
