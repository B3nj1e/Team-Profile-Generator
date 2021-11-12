const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialiszation; employee question prompts", () => {
        it("should return an employee object containing a role when called with 'new' keyword", () => {
            const role = "employee"

            const obj = new Employee("Ben", 1, "ben@email");

            expect(obj.role).toEqual(role);
        })
        it("should return an employee object containing name when called with 'new' keyword", () => {
            const name = "Ben"

            const obj = new Employee("Ben", 1, "ben@email", "employee");

            expect(obj.name).toEqual(name);
        
        })
        it("should return an employee object containing id when called with 'new' keyword", () => {
            const num = 1;

            const obj = new Employee("Ben", 1, "ben@email", "employee");

            expect(obj.id).toEqual(num);
            
        })
        it("should return an employee object containing email and role when called with 'new' keyword", () => {
            const email = "ben@email"

            const obj = new Employee("Ben", 1, "ben@email", "employee");

            expect(obj.email).toEqual(email);
        })
    })
} )