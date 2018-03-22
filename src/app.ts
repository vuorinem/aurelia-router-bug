import { PLATFORM } from 'aurelia-pal';
import { Router } from 'aurelia-router';
import { RouteConfig } from 'aurelia-router';

export class App {
  private router: Router;

  configureRouter(config: RouteConfig, router: Router){
    this.router = router;
    
    config.map([
      {
        route: "",
        redirect: "child",
      },
      {
        name: "child",
        route: "child",
        moduleId: PLATFORM.moduleName("child"),
        nav: true,
      }
    ]);
  }
  
}
