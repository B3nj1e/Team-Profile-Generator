const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officenumber) {
      
        super(name, id, email);  
        this.officenumber = officenumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        console.log(`${this.name}'s office number is ${this.officenumber}`);
    };

    // renderCard() {
    //     const card = document.createElement("div");
    //     const cardHeader = document.createElement("div");
    //     const listContainer = document.createElement("div");
    //     const list = document.createElement("ul")
    //     const nameEl = document.createElement("h2");
    //     const positionEl = document.createElement("h3");
    //     const idEl = document.createElement("li");
    //     const emailEl = document.createElement("li");
    //     const officeNumEl = document.createElement("li");

    //     card.setAttribute("class", "card");
    //     cardHeader.setAttribute("class", "card-header");
    //     listContainer.setAttribute("class", "list-container");
    //     list.setAttribute("class", "list-group list-group-flush")

    //     listContainer.appendChild(list);
    //     card.appendChild(cardHeader);
    //     card.appendChild(listContainer);

    //     nameEl.textContent = this.name;
    //     positionEl.textContent = this.role;
    //     idEl.textContent = this.id;
    //     emailEl.textContent = this.email;
    //     officeNumEl.textContent = this.officenumber;

    // }
}




module.exports = Manager;