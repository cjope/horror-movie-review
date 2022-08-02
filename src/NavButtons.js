import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';

function NavButtons({searchText, setSearchQuery, setPage, page, setSearchText, setGenre, genre, genreData}){

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

    
    function handleGenre(e){
        setGenre(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className="movies-nav">
            <FormControl style={{ marginLeft:"2%"}}>
                <InputLabel id="select-label" style={{color:"white"}}>Genre</InputLabel>
                <Select
                    className="genre-select"
                    labelId="select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Genre"
                    onChange={handleGenre}
                    style={{width:"150px", marginRight:"2%", backgroundColor:"rgb(39, 38, 38)", color:"white"}}
                >
                    <MenuItem  value={""}>Any</MenuItem>
                    {genreData.map(genre=><MenuItem value={genre.id}>{genre.name}</MenuItem>)}

                </Select>
                <Box sx={{width: 300,backgroundColor: 'primary.dark','&:hover': {
                    backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7],
                },}}
                />
            </FormControl>
            {/* <div className="buttons">
                <button className="button" onClick={handlePreviousPage} >Prev</button>
                <button className="button" onClick={handleNextPage} >Next</button>
            </div> */}
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search" onChange={handleSearch} placeholder="search" type="text"></input>
            </form>
{/* 
            <select className="genre-select" value={genre} onChange={e => handleGenre(e)}>
                    <option>Any</option>
                        {genreData.map(genre=><option value={genre.id} key={genre.id}>{genre.name}</option>)}
                    </select> */}


        </div>
    )
}
export default NavButtons