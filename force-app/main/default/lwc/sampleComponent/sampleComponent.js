import { LightningElement, track } from 'lwc';

export default class SampleComponent extends LightningElement {
    title = 'Sample Component';
    @track name = '';
    @track greeting = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    sayHello() {
        this.greeting = `Hello, ${this.name || 'World'}!`;
    }
}
