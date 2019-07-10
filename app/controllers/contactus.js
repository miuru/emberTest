import Controller from '@ember/controller';
import { gte ,not,match,and} from '@ember/object/computed';
export default Controller.extend({

  message:'',
  emailAddress:'',
  isLongEnough: gte("message.length", 5),
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isBothTrue: and('isLongEnough', 'isValid'),
  isDisabled: not('isBothTrue'),

  actions: {

    saveInvitation() {
      alert(` ${this.get('emailAddress')} message : ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }
});
