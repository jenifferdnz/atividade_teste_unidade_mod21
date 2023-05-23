const {num} = require('./atividade02')
describe ('Funcão num', () => {
    it ('Validar menor e maior número', () => {
        expect(num(1, 2, 3)).toBe(1)
        expect(num(1, 2, 3)).toBe(3)
    })
})