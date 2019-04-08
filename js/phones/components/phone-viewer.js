import Component from './component.js';

export default class PhoneViewer extends Component {
    constructor({element,
                onBackButton=()=>{}
                }){
        super({element});
        this.element = element;
        this._onBackButton = onBackButton;
        this._addClickOnBtnBack();

    }
    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        this._render();
        super.show();
    }
    _addClickOnBtnBack(){
        this.element.addEventListener('click',(event)=>{
            const backButton = this.element.querySelector('[data-back-btn="back"]');
            if(event.target!== backButton){
                return;
            }
            this._onBackButton();
        })
    }
    _render() {
        this._element.innerHTML = `
        <img class="phone" src="${this._phoneDetails.images[0]}">

        <button data-back-btn="back">Back</button>
        <button>Add to basket</button>
    
    
        <h1>${this._phoneDetails.name}</h1>
    
        <p>${this._phoneDetails.description}</p>
    
        <ul class="phone-thumbs">
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
          </li>
        </ul>
        `
    }
}