import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { UserDetailsService } from "./user-details.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  providers: [UserDetailsService]
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  postsdata: Post[] = [];

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10];

  //pageEvent: PageEvent;

  constructor(private postsService: UserDetailsService) {}

  // displayedColumns: string[] = [
  //   "FirstName",
  //   "LastName",
  //   "DOB",
  //   "Gender",
  //   "Status"
  // ];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns: string[] = [];
  //displayedColumns: string[] = ["userId", "id", "title", "body"];
  dataSource = new MatTableDataSource<Post>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit() {
    setTimeout(() => {
      this.postsService.getPosts().subscribe((posts: any) => {
        //console.log(posts);
        //  this.postsdata = posts;

        // this.dataSource.paginator = this.paginator;
        this.dataSource = new MatTableDataSource(posts);
        this.length = posts.length;
      });
    }, 1000);
    //console.log(this.dataSource.paginator);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export interface PeriodicElement {
//   FirstName: string;
//   LastName: string;
//   DOB: string;
//   Gender: string;
//   Status: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     FirstName: "Mahesh",
//     LastName: "G",
//     DOB: "13/06/1986",
//     Gender: "Male",
//     Status: "Active"
//   },
//   {
//     FirstName: "Kranthi",
//     LastName: "G",
//     DOB: "24/07/1983",
//     Gender: "Male",
//     Status: "Active"
//   },
//   {
//     FirstName: "Sunny",
//     LastName: "K",
//     DOB: "17/01/1990",
//     Gender: "Male",
//     Status: "InActive"
//   },
//   {
//     FirstName: "Hari",
//     LastName: "K",
//     DOB: "04/03/1988",
//     Gender: "Male",
//     Status: "InActive"
//   },
//   {
//     FirstName: "Prasad",
//     LastName: "M",
//     DOB: "09/10/1992",
//     Gender: "Male",
//     Status: "Active"
//   },
//   {
//     FirstName: "Prasad",
//     LastName: "M",
//     DOB: "09/10/1992",
//     Gender: "Male",
//     Status: "Active"
//   },
//   {
//     FirstName: "Hari",
//     LastName: "K",
//     DOB: "04/03/1988",
//     Gender: "Male",
//     Status: "InActive"
//   },
//   {
//     FirstName: "Kranthi",
//     LastName: "G",
//     DOB: "24/07/1983",
//     Gender: "Male",
//     Status: "Active"
//   },
//   {
//     FirstName: "Sunny",
//     LastName: "K",
//     DOB: "17/01/1990",
//     Gender: "Male",
//     Status: "InActive"
//   },

//   {
//     FirstName: "Mahesh",
//     LastName: "G",
//     DOB: "13/06/1986",
//     Gender: "Male",
//     Status: "Active"
//   }
// ];
