import React from 'react'

function Form({getMovie}) {
  return (
    <form>
        <input type="text" name="search bar" id="search bar" className="searchbar" />
        <input type="submit" value="Search" className="submitBtn" />
    </form>
  )
}

export default Form