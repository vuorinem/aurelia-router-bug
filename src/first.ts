import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject
export class First {
  private secondInActivate: string;
  secondInAttached: string;

  constructor(private router: Router) {
  }

  activate() {
    this.secondInActivate = this.router.generate("second");
  }

  attached() {
    this.secondInAttached = this.router.generate("second");
  }
}
