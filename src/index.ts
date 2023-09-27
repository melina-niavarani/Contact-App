let isShow: boolean = false;
let search = document.getElementById('search') as HTMLDivElement | null

function expandSearchBar() {
    isShow = !isShow
    if (search != null) {
        if (isShow){
            search.style.width = "50%"
            search.style.paddingLeft = "220px"
        } else {
            search.style.width = "200px"
            search.style.paddingLeft = "0"
       }
    }
}


//  show adding form

let enableForm: boolean = false;
let form = document.getElementById('add-form') as HTMLDivElement | null

function showAddForm() {
   enableForm = !enableForm
   if ( form != null ){
       if (enableForm)  form.style.display = "block"
   }
}

function closeForm() {
   enableForm = !enableForm
   if ( form != null ){
      if(!enableForm) form.style.display = "none"
    }
   
}

//  Search

const names = document.getElementById('names') as HTMLDivElement | null;
const contacts = names?.querySelectorAll('.contact') 

function filterNames(){
    const input = document.getElementById('input') as HTMLInputElement | null;
    let filterValue = input?.value.toUpperCase() as any
    // document.getElementById('message').style.display = 'none'

    contacts?.forEach( (contact: any)  => {
       const ref= [
          contact.getElementsByTagName('h2')[0] as HTMLElement,
          contact.getElementsByTagName('h2')[1] as HTMLElement,
          contact.querySelectorAll('.phone-number')[0] as HTMLElement,
          contact.querySelectorAll('.email a')[0] as HTMLElement,
          contact.querySelectorAll('.category')[0] as HTMLElement ,
       ].filter(item => item).map( item => item.innerText ).join(); 
       let display = '';
       if (ref.toUpperCase().indexOf(filterValue) === -1) display= 'none';
        if(contact != null ) contact.style.display = display;
    })
}

////-------------------------- add person to contact list----------------------------/////

interface PersonDetail {
    firstName: string
    lastName: string
    phoneNumber: number
    email: string
    category: string
    address: string
}

let dataContact: PersonDetail = {
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: '',
    category: '',
    address: '',
};

function createContactHTML(contact: PersonDetail): string {
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

function addContact(person: PersonDetail) {
    // Create the HTML for the new contact
    const contactHTML = createContactHTML(person);

    // Append the new contact to the 'names' list
    const namesList = document.getElementById('names');
    console.log(namesList)
    if (namesList) {
        const newContactElement = document.createElement('li');
        newContactElement.innerHTML = contactHTML;
        namesList.appendChild(newContactElement);
    }
}

const addContactButton = document.getElementById('addContactButton');

if (addContactButton) {
    addContactButton.addEventListener('click', (event) => {
        event.preventDefault();
        dataContact = {
            firstName: (document.getElementById('newPersonName') as HTMLInputElement)?.value,
            lastName: (document.getElementById('newPersonLastName') as HTMLInputElement)?.value,
            phoneNumber: parseInt((document.getElementById("newPhoneNumber") as HTMLInputElement)?.value),
            email: (document.getElementById("newPersonEmail") as HTMLInputElement)?.value,
            category: (document.getElementById("newPersonGroup") as HTMLInputElement)?.value,
            address: (document.getElementById("newPersonAddress") as HTMLInputElement)?.value,
        };
        addContact(dataContact);
        enableForm === false;
    });
}
//-------------------------- Search by category------------------------///

let iconEl = document.querySelectorAll('.group-title') as any

iconEl.forEach ( (icon: any) => {
   icon.addEventListener('click', (e: any) => {
      // ishould have data name in my html to access by .dataset it can be (data-id, data-icon or data-logo the name data is important)
      //  .id is depend on my choosen data set in html in this case is id
        const filterGroup = e.target.dataset.id;
        const names = document.getElementById('names') as HTMLDivElement | null;;
        const contacts = names?.querySelectorAll('.contact') as  any | null
        if ( contacts != null ) {
            for (let i = 0; i < contacts.length ; i++) {
                let category = contacts[i].querySelectorAll('.category')[0];
                if(category.innerHTML.toLowerCase() === filterGroup ){
                   contacts[i].style.display = '';
                }else {
                   contacts[i].style.display = 'none';
                }
             }
        }
   })
})


