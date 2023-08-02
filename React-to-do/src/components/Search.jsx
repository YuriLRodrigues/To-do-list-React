const Search = ({search, setSearch}) => {
  
  return (
    <div className="search">
      <input type="text" placeholder="Digite para pesquisar uma task" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search