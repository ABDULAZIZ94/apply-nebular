import { ChangeDetectionStrategy,Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apply-nebular';

  constructor( private sidebarService: NbSidebarService){

  }

  toggle() {
    this.sidebarService.toggle();
  }
}
