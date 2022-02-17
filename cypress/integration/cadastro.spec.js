import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver();

        signupPage.go();
        signupPage.fillForm(deliver);
        signupPage.submit();

        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(message);
    }),

    it('Required fields', function(){

        signupPage.go();
        signupPage.submit();

        signupPage.alertMessageShouldBeValidation('É necessário informar o nome');
        signupPage.alertMessageShouldBeValidation('É necessário informar o CPF');
        signupPage.alertMessageShouldBeValidation('É necessário informar o email');
        signupPage.alertMessageShouldBeValidation('É necessário informar o CEP');
        signupPage.alertMessageShouldBeValidation('É necessário informar o número do endereço');
        signupPage.alertMessageShouldBeValidation('Selecione o método de entrega');
        signupPage.alertMessageShouldBeValidation('Adicione uma foto da sua CNH');
    })

})