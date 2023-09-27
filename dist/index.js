"use strict";
let isShow = false;
let search = document.getElementById('search');
function expandSearchBar() {
    isShow = !isShow;
    if (search != null) {
        if (isShow) {
            search.style.width = "50%";
            search.style.paddingLeft = "220px";
        }
        else {
            search.style.width = "200px";
            search.style.paddingLeft = "0";
        }
    }
}
let enableForm = false;
let form = document.getElementById('add-form');
function showAddForm() {
    enableForm = !enableForm;
    if (form != null) {
        if (enableForm)
            form.style.display = "block";
    }
}
function closeForm() {
    enableForm = !enableForm;
    if (form != null) {
        if (!enableForm)
            form.style.display = "none";
    }
}
const names = document.getElementById('names');
const contacts = names === null || names === void 0 ? void 0 : names.querySelectorAll('.contact');
function filterNames() {
    const input = document.getElementById('input');
    let filterValue = input === null || input === void 0 ? void 0 : input.value.toUpperCase();
    contacts === null || contacts === void 0 ? void 0 : contacts.forEach((contact) => {
        const ref = [
            contact.getElementsByTagName('h2')[0],
            contact.getElementsByTagName('h2')[1],
            contact.querySelectorAll('.phone-number')[0],
            contact.querySelectorAll('.email a')[0],
            contact.querySelectorAll('.category')[0],
        ].filter(item => item).map(item => item.innerText).join();
        let display = '';
        if (ref.toUpperCase().indexOf(filterValue) === -1)
            display = 'none';
        if (contact != null)
            contact.style.display = display;
    });
}
let dataContact = {
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: '',
    category: '',
    address: '',
};
function createContactHTML(contact) {
    return `
        <li class="d-flex flex-column col-12 col-lg-4 g-3">
            <div class="contact p-3">
                <span class="card-background bg-1"></span>
                <div class="d-flex justify-content-between align-items-center py-2">
                    <div class="d-flex">
                        <h2 class="first-name">${contact.firstName}</h2>
                        <h2 class="last-name">${contact.lastName}</h2>
                    </div>
                    <img src="assets/image/ppl-photos/icons8-male-user-96.png" alt="contact-photo">
                </div>
                <div class="phone-number"><a href="tel:${contact.phoneNumber}" alt="call ${contact.phoneNumber}">${contact.phoneNumber}</a></div>
                <div class="email"><a href="mailto:${contact.email}">${contact.email}</a></div>
                <span class="category">${contact.category}</span>
                <div class="address d-flex text-truncate">
                    <span>Address:</span>
                    <p>${contact.address}</p>
                </div>
            </div>
        </li>

    `;
}
function addContact(person) {
    const contactHTML = createContactHTML(person);
    const namesList = document.getElementById('names');
    console.log(namesList);
    if (namesList) {
        const newContactElement = document.createElement('li');
        newContactElement.innerHTML = contactHTML;
        console.log(newContactElement);
        namesList.appendChild(newContactElement);
    }
}
const addContactButton = document.getElementById('addContactButton');
if (addContactButton) {
    addContactButton.addEventListener('click', (event) => {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        dataContact = {
            firstName: (_a = document.getElementById('newPersonName')) === null || _a === void 0 ? void 0 : _a.value,
            lastName: (_b = document.getElementById('newPersonLastName')) === null || _b === void 0 ? void 0 : _b.value,
            phoneNumber: parseInt((_c = document.getElementById("newPhoneNumber")) === null || _c === void 0 ? void 0 : _c.value),
            email: (_d = document.getElementById("newPersonEmail")) === null || _d === void 0 ? void 0 : _d.value,
            category: (_e = document.getElementById("newPersonGroup")) === null || _e === void 0 ? void 0 : _e.value,
            address: (_f = document.getElementById("newPersonAddress")) === null || _f === void 0 ? void 0 : _f.value,
        };
        addContact(dataContact);
        enableForm === false;
    });
}
let iconEl = document.querySelectorAll('.group-title');
iconEl.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        const filterGroup = e.target.dataset.id;
        const names = document.getElementById('names');
        ;
        const contacts = names === null || names === void 0 ? void 0 : names.querySelectorAll('.contact');
        if (contacts != null) {
            for (let i = 0; i < contacts.length; i++) {
                let category = contacts[i].querySelectorAll('.category')[0];
                if (category.innerHTML.toLowerCase() === filterGroup) {
                    contacts[i].style.display = '';
                }
                else {
                    contacts[i].style.display = 'none';
                }
            }
        }
    });
});
//# sourceMappingURL=index.js.map