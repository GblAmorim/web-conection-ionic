import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() type: string;
  @Input() user: string;

  constructor(
    private userService: UserService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  public createUser(user: IUser) {
    this.userService.createUser(user).subscribe(
      (res) => {
        this.modalController.dismiss();
      },
      async (error) => {
        console.log(error);
      }
    );
  }

  public updateUser(user: IUser) {
    this.userService.updateUser(user).subscribe(
      (res) => {
        this.modalController.dismiss();
      },
      async (error) => {
        console.log(error);
      }
    );
  }
}
