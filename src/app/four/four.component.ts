import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
