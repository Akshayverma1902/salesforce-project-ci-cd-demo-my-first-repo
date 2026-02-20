import { createElement } from 'lwc';
import SampleComponent from 'c/sampleComponent';

describe('c-sample-component', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders and responds to input', () => {
        const element = createElement('c-sample-component', {
            is: SampleComponent
        });
        document.body.appendChild(element);

        const input = element.shadowRoot.querySelector('lightning-input');
        expect(input).not.toBeNull();
    });
});
