/* Search bar is an independant functional component */
const SearchBar = ({
    value = '',
    onChange = null,
    callBack = null,
    placeholder = "enter user name"
}) => {

    return (
        <form
            className="search-form"
            action=""
            onSubmit={
                (event) => {
                    event.preventDefault();
                    callBack && callBack(event);
                }
            }
        >
            <input
                type="text"
                placeholder={placeholder}
                name=""
                value={value}
                onChange={onChange}
            />
            <button
                type="submit"
                className="submit-button"
            >
                <i className="fa fa-search"/>
            </button>
        </form>
    );
}
 
export default SearchBar;