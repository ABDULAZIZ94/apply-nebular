import { ChangeDetectionStrategy,Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apply-nebular';

  public karanganM;
  //form controls
  public karanganFC = new FormControl();
  public namaFC = new FormControl();
  public umurFC = new FormControl();

  constructor( private sidebarService: NbSidebarService){

  }

  toggle() {
    this.sidebarService.toggle();
  }
}
