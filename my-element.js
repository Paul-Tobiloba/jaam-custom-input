import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    version: {},
    name: {},
    surname: {},
    description: {}
  };

  constructor() {
    super();
    this.version = 'STARTING';
    this.name = '';
    this.surname = '';
    this.description = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.copyValuesBetweenSections();
  }

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      <label for="name">Name:</label>
      <input id="name" type="text" .value=${this.name} @input=${this.updateName}>
      <label for="surname">Surname:</label>
      <input id="surname" type="text" .value=${this.surname} @input=${this.updateSurname}>
      <label for="description">Description:</label>
      <textarea id="description" .value=${this.description} @input=${this.updateDescription}></textarea>
    `;
  }

  updateName(event) {
    this.name = event.target.value;
  }

  updateSurname(event) {
    this.surname = event.target.value;
  }

  updateDescription(event) {
    this.description = event.target.value;
  }

  copyValuesBetweenSections() {
    var numOfClicks = document.documentElement.querySelectorAll('[formcontrolid="fc_1d2c3c8e8556462fb5107b35b9785e23"] .ntx-repeating-section-repeated-section').length - 1;

    for (var i = 0, j = numOfClicks; i < j; i++) {
      document.documentElement.querySelector('[formcontrolid="fc_f7edea3c7bbc474ba19424f8e5269e62"] .btn-repeating-section-new-row').click();
    }

    var readOnlyTextShort = document.documentElement.querySelectorAll('[formcontrolid="fc_1d2c3c8e8556462fb5107b35b9785e23"] input:not([type="checkbox"])');

    readOnlyTextShort.forEach(function(input) {
      document.documentElement.querySelector(`[formcontrolid="fc_f7edea3c7bbc474ba19424f8e5269e62"] [aria-label="${input.ariaLabel}"]`).value = input.value;
    });
  }
}

customElements.define('my-element', MyElement);
