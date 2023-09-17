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
function filterNames() {
    const input = document.getElementById('input');
    let filterValue = input === null || input === void 0 ? void 0 : input.value.toUpperCase();
    const names = document.getElementById('names');
    const contacts = names === null || names === void 0 ? void 0 : names.querySelectorAll('.contact');
    contacts === null || contacts === void 0 ? void 0 : contacts.forEach((contact) => {
        const ref = [
            contact.getElementsByTagName('h2')[0],
            contact.getElementsByTagName('h2')[1],
            contact.querySelectorAll('.phone-number')[0],
            contact.querySelectorAll('.email a')[0],
            contact.querySelectorAll('.category')[0],
        ].filter(item => item).map(item => item.innerText).join();
        let display = '';
        if (ref.toUpperCase().indexOf(filterValue))
            display = 'none';
        if (contact != null)
            contact.style.display = display;
    });
}
let iconEl = document.getElementsByClassName('.group-title');
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