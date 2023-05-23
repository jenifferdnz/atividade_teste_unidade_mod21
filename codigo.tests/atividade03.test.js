const {multiplos} = require('../codigo.src/atividade03')
describe ('Funcão num', () => {
    it ('Validar menor e maior número', () => {
        expect(multiplos(10)).toBe(23)
    })
})