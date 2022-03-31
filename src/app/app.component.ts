import { Component } from '@angular/core';
import {TestService} from "./test.service";
import {Test} from "./Test";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingapi';
constructor( private testService:TestService) {
}
test:Test[]=[];
  add(HeroFirstName: string){
  HeroFirstName = HeroFirstName.trim();
  this.testService.add({HeroFirstName} as Test).subscribe(hero => this.test.push({HeroFirstName} as Test));
  }
}
/*add(HeroFirstName: string): void {
    HeroFirstName = HeroFirstName.trim();
    this.heroService.addHero( {HeroFirstName} as Hero)
      .subscribe(hero => {this.heroes.push({HeroFirstName} as Hero);
      });
  }*/
