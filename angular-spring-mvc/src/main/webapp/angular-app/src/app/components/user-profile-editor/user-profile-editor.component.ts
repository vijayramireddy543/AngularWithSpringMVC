import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../shared/interfaces';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-profile-editor',
  templateUrl: './user-profile-editor.component.html',
  styleUrls: ['./user-profile-editor.component.css']
})
export class UserProfileEditorComponent implements OnInit {

  name = new FormControl('');
  formData:String;
  profileForm = new FormGroup({
          name: new FormControl(''),
          id: new FormControl(''),
          phoneNumber: new FormControl('')
        });

  constructor(private userService: UserService) { }

  ngOnInit() {
    }

  updateName() {
     this.name.setValue('Nancy');
  }

  onSubmit() {
    this.formData = this.profileForm.value
    this.userService.save(this.profileForm.value).subscribe(data => {
       this.formData = "Data saved in server"
    });
  }

}
