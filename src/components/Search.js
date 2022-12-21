import React from 'react'

function Search(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchString(e.target.elements.inputBox.value)
  }

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input type="text"  name="inputBox" />
      </form>
    </div>
  )
}

export default Search