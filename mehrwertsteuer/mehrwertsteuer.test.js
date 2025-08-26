const {mwst, brutto} = require("./mehrwertsteuer.js")
test("7% von 100 ergeben 7", () => {
    expect(mwst(100,0.07)).toBe(7)
})

test("19% von 200 ergeben 38", () => {
    expect(mwst(200,0.19)).toBe(38)
})

test("Betrag von 0 ergibt 0 Steuern", () => {
    expect(mwst(0,0.19)).toBe(0)
})

test("100 Netto, 19% Steuern ergeben 119", () => {
    expect(brutto(100,0.19)).toBe(119)
})

test("50 Netto, 7% Steuern ergeben 53,5", () => {
    expect(brutto(50,0.07)).toBe(53.5)
})