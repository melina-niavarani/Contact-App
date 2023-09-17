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

function filterNames(){
    const input = document.getElementById('input') as HTMLInputElement | null;
    let filterValue = input?.value.toUpperCase() as any
    const names = document.getElementById('names') as HTMLDivElement | null;
    const contacts = names?.querySelectorAll('.contact') 
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
       if (ref.toUpperCase().indexOf(filterValue))  display= 'none';
        // document.getElementById('message').style.display = 'block'
        // console.log(document.getElementById('message'))
        if(contact != null ) contact.style.display = display;
    })
}

// add person to contact list


// Search by category

let iconEl = document.getElementsByClassName('.group-title') as any

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
