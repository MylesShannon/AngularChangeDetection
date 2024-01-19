import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-five',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
