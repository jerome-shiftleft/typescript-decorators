export default function firstClassDecorator() {

  function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor);
  }

  @Logger
  class Person {
    name = 'Max';

    constructor() {
      console.log('Creating person object...');
    }
  }

  const pers = new Person();

  console.log(pers);

} // end of export default function firstClassDecorator()