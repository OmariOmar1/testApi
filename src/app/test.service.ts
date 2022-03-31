import { Injectable } from '@angular/core';
import {Test} from "./Test";
import {catchError, Observable, pipe, tap} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) {

  }

  httpOptionsPost = {
    headers: new HttpHeaders(
      {
        "Content-Type" : "application/json"
      }
    )
  }

  add(heroname:Test):Observable<Test> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post<Test>('http://localhost/tour-heroes-php/addDataToTourHeroes.php', [{
      "HeroId": "1",
      "HeroFirstName": "Dr",
    }], {'headers': headers})
  }
}

