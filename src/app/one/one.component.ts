import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [ButtonComponent, TwoComponent, ThreeComponent],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {

  constructor(private el: ElementRef, private highlight: HighlightService, public cd: ChangeDetectorRef) { }

  check() {
    this.highlight.do(this.el);
  }

}
