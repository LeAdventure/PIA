import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import {MastodonNotif } from 'src/mastodon-classes/MastodonNotif';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private instanceURL :string = "https://botsin.space";
  private token :string = "hNAusBxqZEfPFKPYrjJ213Vou9GzZRBfnr1AWQPC9vw";
  private notifs :Array<MastodonNotif> = [];

  constructor( private general : GeneralService ) {}

  ionViewWillEnter() {
    this.loadNotifs();
  }

  ionViewWillLeave() {
    this.notifs = []
  }

  loadNotifs(): void {
    this.general.getNotifs( this.instanceURL, this.token ).subscribe(
      (data : any) => {
        this.notifs = data;
      },
      (error) => {
        console.error("Error");
      }
    )
  }

}


