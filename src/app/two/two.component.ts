import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FourComponent } from '../four/four.component';
import { FiveComponent } from '../five/five.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [ButtonComponent, FourComponent, FiveComponent],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
