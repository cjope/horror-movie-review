
function NavButtons({searchText, setSearchQuery, setPage, page, setSearchText}){

    function handleSearch(e){
        e.preventDefault()
        setSearchQuery(searchText)
    }

    function handlePreviousPage(){
    page===1? setPage(1): setPage(page-1)
    }

    function handleNextPage(){
    setPage(page+1)
    }

    function handleSearchText(e){
        setSearchText(e.target.value)
        e.target.value!==""?setSearchText(e.target.value):setSearchQuery("")
    }

    return(
        <div className="movies-nav">
            <div className="buttons">
                <button className="button" onClick={handlePreviousPage} >Prev</button>
                <button className="button" onClick={handleNextPage} >Next</button>
            </div>
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search" onChange={handleSearchText} placeholder="search" type="text"></input>
            </form>
        </div>
    )
}
export default NavButtons