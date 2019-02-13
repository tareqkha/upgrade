import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "ng2/app/phone.service";

@Component({
  selector: 'ng2-demo',
  templateUrl: './ng2-demo.component.html'
})
export class Ng2DemoComponent implements OnInit {

  phones: any[] = [];
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {
    }

    ngOnInit() {
      this.phones = this.phoneService.query();
    }
    toggle() {
      this.show = !this.show;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";
    }

}
