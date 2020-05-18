import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { CurrentAccountService } from 'src/services/current-account.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  
  @Input() text:string;

  constructor( private general:GeneralService ) {}
  getCurrent() {
    return CurrentAccountService.getCurrent();
  }
  postToot(): void {
    this.general.postToot(this.getCurrent().instance, this.getCurrent().token, this.text).subscribe(
      (data)=>{
        alert("Posted Succesfully");
      },
      (error)=>{
        alert("Something Happened...")
      }
    )
  }

}
