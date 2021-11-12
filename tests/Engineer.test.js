const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialiszation; Engineer question prompts", () => {
        it("should return an object containing name when called with 'new' keyword", () => {
            const name = "Ben";

            const obj = new Engineer("Ben", 1, "ben@email", "Benji");

            expect(obj.name).toEqual(name);

        })
        it("should return an object containing id when called with 'new' keyword", () => {
            const num = 1;
            
            const obj = new Engineer("Ben", 1, "ben@email", "Benji");

            expect(obj.id).toEqual(num);

        })
        it("should return an object containing an email when called with 'new' keyword", () => {
            const email = "ben@email";
            
            const obj = new Engineer("Ben", 1, "ben@email", "Benji");

            expect(obj.email).toEqual(email);

        })
        it("should return an object containing a role when called with 'new' keyword", () => {
            
            const role = "Engineer";

            const obj = new Engineer("Ben", 1, "ben@email", "Benji");
            
            expect(obj.role).toEqual(role);

        })
        it("should return an object containing an github username when called with 'new' keyword", () => {
            const github = "Benji";

            const obj = new Engineer("Ben", 1, "ben@email", "Benji");

            expect(obj.github).toEqual(github);
            
        })
        it("should return an object containing a method to get the github username when called with 'new' keyword", () => {
            const getGithubString = console.log("Ben's github username is Benji");

            const obj = new Engineer("Ben", 1, "ben@email", "Benji");

            expect(obj.getGithub()).toEqual(getGithubString);
        })
    })
} )