var faker =  require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '19999999999',
            address: {
                postalcode: '88330383',
                street: 'Rua 2650',
                number: '123',
                details: 'casa',
                district: 'Centro',
                city_state: 'Balneário Camboriú/SC'
            },
            delivery_method: 'Moto',
            cnh: '4devs.jpg'
        }

        return data

    }

}