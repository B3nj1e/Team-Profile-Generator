const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialiszation; employee question prompts", () => {
        it("should rest an object containing name, id, email and role when called with 'new' keyword", () => {
            const obj = new Employee;

            expect("number" in obj.id).toEqual(true);
            expect("string" in obj.name).toEqual(true);
            expect("string" in obj.email).toEqual(true);
            expect("string" in obj.role).toEqual(true);
           
        })
    })
} )