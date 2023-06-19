/* eslint-disable no-unused-vars */
import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { PluginContract, PropType as PluginProperty } from '@nintex/form-plugin-contract';

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

    this.copyValuesBetweenSections();

  }




  render() {

    var numOfClicks = document.documentElement.querySelectorAll(`[formcontrolid="${this.rsReadOnly}"] .ntx-repeating-section-repeated-section`).length - 1;
    for (var i = 0, j = numOfClicks; i < j; i++) { document.documentElement.querySelector(`[formcontrolid="${this.rsEditable}"] .btn-repeating-section-new-row`).click() }
    var readOnlyTextShort = document.documentElement.querySelectorAll(`[formcontrolid="${this.rsReadOnly}"] input:not([type="checkbox"])`);
    var editableRS = this.rsEditable;
    readOnlyTextShort.forEach(function (input) { document.documentElement.querySelector(`[formcontrolid="${editableRS}"] [aria-label="${input.ariaLabel}"]`).value = input.value; })

    return html`<span></span>`;

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




// registering the web component

const elementName = 'jaam-copy-repeating-section';

customElements.define(elementName, EditableRepeatingSection);
