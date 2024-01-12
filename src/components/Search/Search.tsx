const Search = () => {
 return (
    <section className="bg-tertiary-light px-4 py-6 rounded-lg">
        <div className="container mx-auto flex items-center gap-4 justify-between flex-wrap">
            <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
                <label className="text-sm block font-medium mb-2 text-black">
                    Room Type
                </label>
                <div className="relative">
                    <select 
                    //value={roomTypeFilter}
                    //onChange={handleRoomTypeChange} 
                    className=" w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none">
                      <option value='All'>All</option>
                      <option value='Basic'>Basic</option>
                      <option value='Luxury'>Luxury</option>
                      <option value='Suite'>Suite</option>
                    </select>
                </div>
            </div>
            <div className="w-full md:h-1/3 lg:w-auto mb-4 md:mb-0">
                 <label className="block text-sm font-medium mb-2 text-black">Search</label>
                 <input 
                 type="search"
                  id="search" 
                  placeholder="Search..."
                  className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
                  //value={searchQuery}
                 // onChange={handleSearchQueryChange}
                  />
            </div>
            <button 
            className="btn-primary"
            type="button"
            //onClick={handleFilterClick}
            >Search</button>
        </div>
    </section>
 )
}
export default Search;