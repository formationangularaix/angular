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
