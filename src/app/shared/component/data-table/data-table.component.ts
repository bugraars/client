import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/core/services/api/users.service';

export interface UserData {
  _id: string;
  name: string;
  email: string;
  department: string;
  branchDir: string;
  role: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  usersData: UserData[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<UserData>(this.usersData);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    const users = this.usersData;
    this.getUsers();
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  getUsers() {
    this.usersService.getUsers().subscribe((data: any) => {
      this.usersData = data;
      this.displayedColumns = Object.keys(this.usersData[0]);
      this.dataSource = new MatTableDataSource<UserData>(this.usersData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
