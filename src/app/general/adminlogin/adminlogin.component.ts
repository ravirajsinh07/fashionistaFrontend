import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  formdata:any;
  message = "";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.formdata = new FormGroup(
      {
        username:new FormControl("", Validators.required),
        password:new FormControl("", Validators.required)
      }
    )
  }

  /**
   * The function handles the submission of login data for an admin user and redirects to the admin
   * dashboard if successful, otherwise displays an error message.
   *  - The data parameter is an object that contains the username and password
   * entered by the user for the login process.
   */
  onClickSubmit(data:any){
    this.api.post("admin/login", {data:data}).subscribe((result:any)=>{
      console.log(result);
      if(result.data.status == "success"){
        localStorage.setItem("usertype", "admin");
        window.location.replace("/admin/dashboard");
      }
      else{
        this.message = "Username or password is wrong.";
      }
    }, (err)=>{
      console.log(err);
    });
  }
}
