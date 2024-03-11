import React from "react";

const Search = ({mynames, setNewName}) => {
  const mylist = [
    "Andrew",
    "Robert",
    "Mihaela",
    "Ileana",
    "Andreea",
    "Edoardo",
    "Jamila",
    "Erica",
    "Francesco",
    "David",
    "Elisabetha",
    'Sebastian',
    'Steven',
    'Enrique',
    'Madonna',
    'Michael Jackson',
    'Leonardo di Caprio',
    'John Doe',
    'Claude',
    'Bernard',
    'Clara',
    'Chiara',
    'Constantin',
    'Robertino',
    'Obama',
    'Da Vinci',
    'Salvador Dali',
    'Clementine',
    'Nicole'
 ]

  const filterBySearch = (event) => {
      // Access input value
      const filterby = event.target.value;
      // Create a copy of item newNames;
      let updatedList = [...mylist];
      //Include all elements which includes the search query
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().indexOf(filterby.toLowerCase()) !== -1;
      });
      // Trigger render with updated values
      setNewName(updatedList);
};

  return (
    <div className='main_screen'>
      <div className="input_text" >
        <input onChange={filterBySearch}
          className="input_space" type="text" placeholder='Type here...'></input>
      </div>
      <ol className="mynames">
        {mynames.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ol>    
    </div>
  )
}

export default Search;