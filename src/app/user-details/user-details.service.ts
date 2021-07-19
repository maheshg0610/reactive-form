import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserDetailsService {
  constructor(private http: HttpClient) {
    console.log("services works...");
  }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
    //.map(res => res);
  }
}
