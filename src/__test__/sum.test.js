import sum from '../sum.js'

test("test the addition function for sum", () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(1,2)).toBeTruthy();
})