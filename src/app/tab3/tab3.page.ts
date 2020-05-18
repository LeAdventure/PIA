import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import {MastodonNotif } from 'src/mastodon-classes/MastodonNotif';
import { CurrentAccountService } from 'src/services/current-account.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 
  private notifs :Array<MastodonNotif> = [];

  constructor( private general : GeneralService ) {}
  getCurrent() {
    return CurrentAccountService.getCurrent();
  }
  ionViewWillEnter() {
    if (this.getCurrent() !== null)
      this.loadNotifs();
  }

  ionViewWillLeave() {
    this.notifs = []
  }

  loadNotifs(): void {
    this.general.getNotifs( this.getCurrent().instance, this.getCurrent().token ).subscribe(
      (data : any) => {
        this.notifs = data;
      },
      (error) => {
        console.error("Error");
      }
    )
  }

}


