import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements AfterViewInit {
  constructor() {}

  displayedColumns: string[] = [
    "FirstName",
    "LastName",
    "DOB",
    "Gender",
    "Status"
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  FirstName: string;
  LastName: string;
  DOB: string;
  Gender: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    FirstName: "Mahesh",
    LastName: "G",
    DOB: "13/06/1986",
    Gender: "Male",
    Status: "Active"
  },
  {
    FirstName: "Kranthi",
    LastName: "G",
    DOB: "24/07/1983",
    Gender: "Male",
    Status: "Active"
  },
  {
    FirstName: "Sunny",
    LastName: "K",
    DOB: "17/01/1990",
    Gender: "Male",
    Status: "InActive"
  },
  {
    FirstName: "Hari",
    LastName: "K",
    DOB: "04/03/1988",
    Gender: "Male",
    Status: "InActive"
  },
  {
    FirstName: "Prasad",
    LastName: "M",
    DOB: "09/10/1992",
    Gender: "Male",
    Status: "Active"
  },
  {
    FirstName: "Prasad",
    LastName: "M",
    DOB: "09/10/1992",
    Gender: "Male",
    Status: "Active"
  },
  {
    FirstName: "Hari",
    LastName: "K",
    DOB: "04/03/1988",
    Gender: "Male",
    Status: "InActive"
  },
  {
    FirstName: "Kranthi",
    LastName: "G",
    DOB: "24/07/1983",
    Gender: "Male",
    Status: "Active"
  },
  {
    FirstName: "Sunny",
    LastName: "K",
    DOB: "17/01/1990",
    Gender: "Male",
    Status: "InActive"
  },

  {
    FirstName: "Mahesh",
    LastName: "G",
    DOB: "13/06/1986",
    Gender: "Male",
    Status: "Active"
  }
];
