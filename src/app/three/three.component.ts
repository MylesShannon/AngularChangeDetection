import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SixComponent } from '../six/six.component';
import { SevenComponent } from '../seven/seven.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [ButtonComponent, SixComponent, SevenComponent],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
