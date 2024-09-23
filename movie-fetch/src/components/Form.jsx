import {useState} from 'react'

function Form({getMovie}) {
    const [formData, setFormData] = useState({
        searchTerm:''
    })

    function handleChange(evt){
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt){
        evt.preventDefault();
        getMovie(formData.searchTerm);
    }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" className="searchbar"
        name="searchTerm" value={formData.searchTerm}
        onChange={handleChange}/>

        <input type="submit" value="Search" className="submitBtn" />
    </form>
  )
}

export default Form