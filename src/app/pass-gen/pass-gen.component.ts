import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';
import { MdSnackBar } from '@angular/material';
import { ApiTestService } from '../api-test.service';

@Component({
  selector: 'app-pass-gen',
  templateUrl: './pass-gen.component.html',
  styleUrls: ['./pass-gen.component.css'],
  providers: [ApiTestService]
})
export class PassGenComponent implements OnInit {

  password: string;

  constructor(private passwordService: PasswordService, private snackBar: MdSnackBar, private apiTestService: ApiTestService) {

  }

  openSnackBar() {
    this.snackBar.open('Password copied to clipboard', null, {
      duration: 3000
    });
  }

  generatePass(): void {
    this.password = this.passwordService.getPassword();
  }



  test: string;

  ngOnInit() {

    this.generatePass();

    this.apiTestService
      .getContacts()
      .then((testString: Object) => {
        this.test =  JSON.stringify(testString);
      });
  }
}