const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialiszation; employee question prompts", () => {
        it("should rest an object containing name, id, email and role when called with 'new' keyword", () => {
            const num = 1;
            const name = "Ben"
            const email = "ben@email"
            const role = "employee"

            const obj = new Employee("Ben", 1, "ben@email", "employee");

            expect(obj.id).toEqual(num);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.role).toEqual(role);
        })
    })
} )