import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from "../login-service";
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginInstance: LoginService,  private router: Router) { }

  submitted = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required,),
    password: new FormControl('', Validators.required),

  })

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

  utf8(str) {
    const utf8Bytes = encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      (match, p1) => {
        return String.fromCharCode(parseInt('0x' + p1, 16));
      }
    );
    return utf8Bytes;
  }

  loginClick() {

    var getUserName = this.loginForm.value.username;
    var hashPassword = Md5.hashStr(this.loginForm.value.password);

    this.loginInstance.GetUser(getUserName, hashPassword as string)
      .subscribe((data) => {

        var resBody = data.body;
        var username = data.body.UserName;
        var token = data.headers.get('tokenheader');
        var tokenheader64 = this.utf8(btoa(username + ':' + token));
        var SavedToken = JSON.parse(localStorage.getItem('key'));

        if (tokenheader64 != SavedToken) {
          console.log(data)
          localStorage.setItem('body', JSON.stringify(resBody));
          localStorage.setItem('key', JSON.stringify(tokenheader64));
          this.router.navigate(['search']);
        } else {
          localStorage.setItem('key', JSON.stringify(btoa(tokenheader64)));
          console.log("user not found");     
        }
      })
  }


  ngOnInit(): void {

  }

}
