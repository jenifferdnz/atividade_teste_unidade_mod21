const {mdcnum} = require('./atividade01')
describe ('Funcão atividade 01', () => {
    it ('MDC', () => {
        expect(mdcnum(10, 20)).toBe(10)
        expect(mdcnum(5, 10)).toBe(5)
    })
})