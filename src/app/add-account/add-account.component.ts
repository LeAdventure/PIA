import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  @Input() public new_instanceURL :string = "";
  @Input() public new_token :string = "";
  
  constructor( private storage: Storage, private general: GeneralService) { }

  ngOnInit() {}

  addAccount(){
    if (this.new_instanceURL.search('https://') == -1){
      this.new_instanceURL = 'https://' + this.new_instanceURL;
    }
    this.general.validateCredentials(this.new_instanceURL, this.new_token).subscribe( (data)=>{
      this.storage.set(this.new_token, this.new_instanceURL).then(
        (succes)=>{
          alert("Succesfully added account");
          
        },
        (reason) => {
          alert("Something went wrong...");
          console.log(reason);
        }
      );
      
    },
    (error)=>{
      console.log(error);
    }
  );}
}
