const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialiszation; Intern question prompts", () => {
        it("should return an object containing name when called with 'new' keyword", () => {
            const name = "Ben";

            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");

            expect(obj.name).toEqual(name);

        })
        it("should return an object containing id when called with 'new' keyword", () => {
            const num = 1;
            
            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");

            expect(obj.id).toEqual(num);

        })
        it("should return an object containing an email when called with 'new' keyword", () => {
            const email = "ben@email";
            
            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");

            expect(obj.email).toEqual(email);

        })
        it("should return an object containing a role when called with 'new' keyword", () => {
            
            const role = "Intern";

            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");
            
            expect(obj.role).toEqual(role);

        })
        it("should return an object containing a school when called with 'new' keyword", () => {
            const school = "Adelaide Uni";

            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");

            expect(obj.school).toEqual(school);
            
        })
        it("should return an object containing a method to get the school when called with 'new' keyword", () => {
            const getSchoolString = console.log("Ben's attends Adelaide Uni");

            const obj = new Intern("Ben", 1, "ben@email", "Adelaide Uni");

            expect(obj.getSchool()).toEqual(getSchoolString);
        })
    })
} )