import { PLATFORM } from 'aurelia-framework';
import { RouteConfig } from "aurelia-router";

export class App {

  configureRouter(config: RouteConfig) {
    console.log('Configuring App Router');

    config.map([
      {
        route: "",
        redirect: PLATFORM.moduleName("first"),
      },
      {
        name: "first",
        route: "first",
        moduleId: PLATFORM.moduleName("first"),
      },
      {
        name: "second",
        route: "second",
        moduleId: PLATFORM.moduleName("second"),
      }
    ]);
  }

}
