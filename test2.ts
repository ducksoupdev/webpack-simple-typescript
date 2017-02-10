import {Test1} from './test1';

export class Test2 {
    constructor() {
        let test = new Test1();
        document.addEventListener('DOMContentLoaded', () => test.sayHello());
    }
}