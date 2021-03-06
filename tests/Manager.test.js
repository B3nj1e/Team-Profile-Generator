const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialiszation; Manager question prompts", () => {
        it("should return an object containing name when called with 'new' keyword", () => {
            const name = "Ben";

            const obj = new Manager("Ben", 1, "ben@email", 4);

            expect(obj.name).toEqual(name);

        })
        it("should return an object containing id when called with 'new' keyword", () => {
            const num = 1;
            
            const obj = new Manager("Ben", 1, "ben@email", 4);

            expect(obj.id).toEqual(num);

        })
        it("should return an object containing an email when called with 'new' keyword", () => {
            const email = "ben@email";
            
            const obj = new Manager("Ben", 1, "ben@email", 4);

            expect(obj.email).toEqual(email);

        })
        it("should return an object containing a role when called with 'new' keyword", () => {
            
            const role = "Manager";

            const obj = new Manager("Ben", 1, "ben@email", 4);
            
            expect(obj.role).toEqual(role);

        })
        it("should return an object containing an office number when called with 'new' keyword", () => {
            const officenumber = 4;

            const obj = new Manager("Ben", 1, "ben@email", 4);

            expect(obj.officenumber).toEqual(officenumber);
            
        })
        it("should return an object containing a method to get the office number when called with 'new' keyword", () => {
            const getOfficeNumberString = console.log("Ben's office number is 4");

            const obj = new Manager("Ben", 1, "ben@email", 4);

            expect(obj.getOfficeNumber()).toEqual(getOfficeNumberString);
        })
    })
} )