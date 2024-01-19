import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './six.component.html',
  styleUrl: './six.component.scss'
})
export class SixComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
