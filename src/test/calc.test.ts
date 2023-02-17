import { divide } from "../calculator/calc";
describe("Calculator", () => {
    describe("divide", () => {
        it("should return success result with 2 while dividing 10 by 5", () => {
            expect(divide(10, 5)).toBe(2);
        });
        it("should throw error while dividing by zero", () => {
            expect(() => divide(10, 0)).toThrowError("Cannot divide by zero");
        });
    })
});