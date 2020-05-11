import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/services/general.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private instanceURL :string = "https://botsin.space";
  private token :string = "hNAusBxqZEfPFKPYrjJ213Vou9GzZRBfnr1AWQPC9vw";
  @Input() private text:string;

  constructor( private general:GeneralService ) {}

  postToot(): void {
    this.general.postToot(this.instanceURL, this.token, this.text).subscribe(
      (data)=>{
        alert("Posted Succesfully");
      },
      (error)=>{
        alert("Something Happened...")
      }
    )
  }

}
