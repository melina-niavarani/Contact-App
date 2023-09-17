"use strict";
//# sourceMappingURL=index.js.map
let isShow = false;
let search = document.getElementById('search')

function expandSearchBar() {
    isShow = !isShow
    if (isShow){
        search.style.width = "50%"
        search.style.paddingLeft = "220px"
    } else {
        search.style.width = "200px"
        search.style.paddingLeft = "0"
    }
}


//  show adding form

let enableForm = false;
let form = document.getElementById('add-form')
function showAddForm() {
   enableForm = !enableForm
   if (enableForm) {
      form.style.display = "block"
      console.log(form.style)
   } else {
      form.style.display = "none"
   }
}

function filterNames(){
    let filterValue = document.getElementById('input').value.toUpperCase();
    const names = document.getElementById('names');
    const contacts = names.querySelectorAll('.contact');
   
    contacts.forEach( (contact) => {
        const ref= [
           contact.getElementsByTagName('h2')[0],
           contact.getElementsByTagName('h2')[1],
           contact.querySelectorAll('.phone-number')[0],
           contact.querySelectorAll('.email a')[0],
           contact.querySelectorAll('.category')[0],
        ].filter(item => item).map( item => item.innerText ).join(); 
        let display = '';
        if (ref.toUpperCase().indexOf(filterValue)){
            display= 'none';
         } 
         document.getElementById('message').style.display = 'block'
         console.log(document.getElementById('message'))
         contact.style.display = display;
        ;
     })
}


// Search by category

const iconEl = document.querySelectorAll('.group-title');

iconEl.forEach ( icon => {
   icon.addEventListener('click', (e) => {
      // ishould have data name in my html to access by .dataset it can be (data-id, data-icon or data-logo the name data is important)
      //  .id is depend on my choosen data set in html in this case is id
      const filterGroup = e.target.dataset.id;
      const names = document.getElementById('names');
      const contacts = names.querySelectorAll('.contact');
      for (let i = 0; i < contacts.length; i++) {
         let category = contacts[i].querySelectorAll('.category')[0];
         if(category.innerHTML.toLowerCase() === filterGroup ){
            contacts[i].style.display = '';
         }else {
            contacts[i].style.display = 'none';
         }
      }
   })
})