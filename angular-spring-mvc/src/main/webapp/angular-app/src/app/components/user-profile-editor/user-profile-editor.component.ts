import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile-editor',
  templateUrl: './user-profile-editor.component.html',
  styleUrls: ['./user-profile-editor.component.css']
})
export class UserProfileEditorComponent implements OnInit {

  name = new FormControl('');
    formData:String;
    profileForm = new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
        });

    constructor() { }

    ngOnInit() {
    }

    updateName() {
      this.name.setValue('Nancy');
    }

      onSubmit() {
        console.warn(this.profileForm.value);
        this.formData = this.profileForm.value
      }

}
