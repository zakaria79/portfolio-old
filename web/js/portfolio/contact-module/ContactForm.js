import Xhr from './../../xhr/Xhr';
import DOMManager from './../../dom-manager/DOMManager';

export default class ContactForm {
  constructor() {
    let xhr = new Xhr();
    this.req = xhr.getXhr();
    this.dom = new DOMManager();
    this.dom.setElement(['#success_message', '#error_message', '#contact_form', '#firstname', '#lastname', '#mail', '#tel', '#message']);
    this.Es = this.dom.getElements();
  }

  run() {
    this.Es.contact_formElt.addEventListener('submit', this.onSubmit.bind(this));
    this.Es.telElt.addEventListener('input', this.validTelephoneNumber.bind(this));
    this.Es.mailElt.addEventListener('input', this.validEmail.bind(this));
  }

  testElementLengthValue(elt, minValue, fieltName) {
    if (elt.value.length < minValue) {
      this.setMessage(this.Es.error_messageElt, `Le champs "${fieltName}" n'est pas valide`);
      return false;
    }
    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.testElementLengthValue(this.Es.firstnameElt, 3, 'Prénom') ||
      !this.testElementLengthValue(this.Es.lastnameElt, 3, 'Nom') ||
      !this.testElementLengthValue(this.Es.messageElt, 10, 'Message') ||
      !this.validateEmail() ||
      !this.validateTelformat()
    ) {
      return;
    }
    let data = new FormData(e.currentTarget);
    this.req.open('POST', 'contact');
    this.req.onreadystatechange = () => {
      if (this.req.readyState === XMLHttpRequest.DONE) {
        if (this.req.status === 200) {
          this.setMessage(this.Es.success_messageElt, 'Merci pour votre message, je le lirais dès que possible');
        } else {
          this.setMessage(
            this.Es.error_messageElt,
            `Le formulaire n'a pas pu être envoyé, vérifiez que tous les champs sont bien remplis`
            );
        }
      }
    };
    this.req.send(data);
  }

  validateTelformat(text) {
    if (!/^0\d([-\s.]?(\d){2}){4}$/.test(this.Es.telElt.value)) {
      this.setMessage(this.Es.error_messageElt, 'Le numéro de téléphone est invalide');
      return false;
    }
    return true;
  }

  testTel(tel) {
    return /^0\d([-\s.]?(\d){2}){4}$/.test(tel);
  }

  validEmail(e) {
    if (this.testEmail(e.currentTarget.value)) {
      this.valid(e.currentTarget);
      return;
    }
    this.invalid(e.currentTarget);
  }

  testEmail(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
  }

  validateEmail(value) {
    if (!/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(this.Es.mailElt.value)) {
      this.setMessage(this.Es.error_messageElt, 'L\'adresse email est invalide');
      return false;
    }
    return true;
  }

  validTelephoneNumber(e) {
    let val = e.currentTarget.value,
      len = val.replace(/-/g, '').length;
    if (!/[0-9]/.test(val.charAt(val.length - 1)) || len > 10) {
      e.currentTarget.value = val.substring(0, val.length - 1);
    }
    e.currentTarget.value = e.currentTarget.value.replace(/-/g, '');
    e.currentTarget.value = e.currentTarget.value.replace(/(\d{2})/g, '$1-');
    e.currentTarget.value = e.currentTarget.value.replace(/-$/, '');
    if (this.testTel(e.currentTarget.value)) {
      this.valid(e.currentTarget);
      return;
    }
    this.invalid(e.currentTarget);
  }

  setMessage(elt, message) {
    elt.textContent = message;
    elt.hidden = false;
    window.setTimeout(() => {
      elt.hidden = true;
    }, 10000);
  }

  invalid(elt) {
    elt.classList.remove('is-valid');
    elt.classList.add('is-invalid');
  }

  valid(elt) {
    elt.classList.remove('is-invalid');
    elt.classList.add('is-valid');
  }
}
