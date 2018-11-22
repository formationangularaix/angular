import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  users: any

  user_number: number;
  data_to_use = [
    {'value': 'index', 'label': 'Index', 'show_value': true, 'orderby': true, 'active': false},
    {'value': 'picture', 'label': 'First Name', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'name', 'label': 'Last Name', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'age', 'label': 'Age', 'show_value': true, 'orderby': false, 'active': false},
    {'value': 'gender', 'label': 'Gender', 'show_value': false, 'orderby': false, 'active': false},
    {'value': 'email', 'label': 'E-mail', 'show_value': true, 'orderby': false, 'active': false}
  ];

  constructor(private configService: DataService,
    public dialog: MatDialog,
    ) {
      this.openDialog()
     }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

  }  
  ngOnInit() {
    // this.showConfig();
  }

  ngAfterContentInit (): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {user_number: this.user_number}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_number = result;
      this.showConfig();
    });
    
  }

  showConfig() {
    this.configService.getConfig(this.user_number)
      .subscribe((data: Response) =>  {
        this.users = data['results'];
        console.log(data['results']);
      })
  }

}
