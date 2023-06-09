import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

// define the component

export class EditableRepeatingSection extends LitElement {




  static properties = {

    who: { type: String },

  };




  // return a promise for contract changes.

  static getMetaConfig() {

    return {

      controlName: 'Editable Repeating Section',

      fallbackDisableSubmit: false,

      version: '1.0',

      properties: {

        rsEditable: {

          type: 'string',

          title: 'Editable Repeating Section',

          description: 'ID of the editable repeating section'

        },

        rsReadOnly: {

          type: 'string',

          title: 'Read Only Repeating Section',

          description: 'ID of the read only repeating section'

        }

      }

    };

  }




  constructor() {

    super();

  }




  render() {

    var numOfClicks = document.documentElement.querySelectorAll(`[formcontrolid="${this.rsReadOnly}"] .ntx-repeating-section-repeated-section`).length - 1;




    for (var i = 0, j = numOfClicks; i < j; i++) { document.documentElement.querySelector(`[formcontrolid="${this.rsEditable}"] .btn-repeating-section-new-row`).click() }




    var readOnlyTextShort = document.documentElement.querySelectorAll(`[formcontrolid="${this.rsReadOnly}"] input:not([type="checkbox"])`);

    var editableRS = this.rsEditable;

    readOnlyTextShort.forEach(function (input) { document.documentElement.querySelector(`[formcontrolid="${editableRS}"] [aria-label="${input.ariaLabel}"]`).value = input.value; })




    return html`<span></span>`;

  }

}




// registering the web component

const elementName = 'jaam-copy-repeating-section';

customElements.define(elementName, EditableRepeatingSection);
