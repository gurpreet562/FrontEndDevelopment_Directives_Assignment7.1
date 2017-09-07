import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHide=false;
  firstname:string;
  lastname:string;
  fullname:string;
  title;
  ngOnInit(){
    this.firstname=" sakshi ",
    this.lastname="kumari",
    this.title="Miss"
    }
  login(firstname:string,lastname:string,title:string){
  title=this.title;
  this.fullname=title+" " +firstname+" "+lastname
  alert(this.fullname);
   
    
    
  }
}
