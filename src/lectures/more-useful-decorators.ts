export default function moreUsefulDecorators() {
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    return function (constructor: new (...args: any[]) => any) {
      const p = new constructor();
      const hookEl = document.getElementById(hookId);
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    };
  }

  //@Logger("LOGGING - PERSON")
  @WithTemplate("<h1>My Person Object</h1>", "app")
  class Person {
    name = "Max";

    constructor() {
      console.log("Creating person object...");
    }
  }

  const pers = new Person();

  console.log(pers);
} // end of export default function moreUsefulDecorators()
