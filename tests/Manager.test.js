const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialiszation; Manager question prompts", () => {
        it("should rest an object containing name, id, email and role when called with 'new' keyword", () => {
            const num = 1;
            const name = "Ben"
            const email = "ben@email"
            const role = "Manager"

            const obj = new Manager("Ben", 1, "ben@email", "Manager");

            expect(obj.id).toEqual(num);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.role).toEqual(role);
        })
    })
} )