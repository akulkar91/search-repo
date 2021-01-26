/* Search bar is an independant functional component */
const SearchBar = ({
  value = '',
  onChange = null,
  callBack = null,
  placeholder = 'enter user name',
}) => {
  return (
    <form
      className='search-form'
      action=''
      onSubmit={(event) => {
        event.preventDefault()
        callBack && callBack(event)
      }}
    >
      <input
        type='text'
        placeholder={placeholder}
        name=''
        data-testid='user-input'
        value={value}
        onChange={onChange}
      />
      <button
        type='submit'
        data-testid='user-input-search'
        className='submit-button'
      >
        <i className='fa fa-search' />
      </button>
    </form>
  )
}

export default SearchBar
