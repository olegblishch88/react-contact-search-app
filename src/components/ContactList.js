import React from 'react';
import Contact from './Contact.js'

   let contacts =  [
        {
                id:1,
                name: 'Ace Ventura',
                phoneNumber: '+380925508677',
                image: "http://www.highwallpaper.com/wp-content/uploads/Jim-Carrey-Laughing-in-Ace-Ventura.jpg"
            },
            {
                id:3,
                name: "Tommy Vercetty",
                phoneNumber: '+380936299220',
                image: "http://fb.ru/misc/i/gallery/55840/2083242.jpg"
            },
            {
                id:4,
                name:"Poroshenko Petro",
                phoneNumber: '+380936545666',
                image: "https://glavcom.ua/img/article/5088/75_main.jpg"
            },
            {
                id:5,
                name:"Luke Skywalker",
                phoneNumber: '+32058392000',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd3PSBZd_dvDRHzOasTxwHkJ-6wBD85hidFUq5pajh1oFZYQYkg"
            },
            {
                id:6,
                name:"L'Kuchma",
                phoneNumber: '+380933213566',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2gIQx8M5vDC8cCIIIc8LwHjkeOGE2-nRfxNRNEgDS4SBW3Mj"
            }
        ]

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayedContacts:contacts 
        };
    }
    
    handleSearch=(event)=>{
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = contacts.filter(function(el){
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
      this.setState({
          displayedContacts : displayedContacts
      });
    }    

    render(){
        
        return(
            <div>
            <input type="text" className="search-field" onChange={this.handleSearch}/>
            <ul>
            {
              this.state.displayedContacts.map(function(el){
                return(
                    <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image} />
                )
            })
            }
            </ul>
            </div>
        )
    }
}








export default ContactList;