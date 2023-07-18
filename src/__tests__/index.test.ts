import { summator } from "../counter"

describe("summator", () => {
    test("3, 5 gives 8", () => {
        expect(summator(3, 5)).toBe(7);
    })
})

export { }