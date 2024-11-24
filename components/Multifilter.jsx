import React, { useEffect, useState } from 'react'
import courses from './courses'

const Multifilter = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(courses);
    let filter = ["dsa", "dev", "dsa and dev"];

    const handleFilterButtonClick = (selectedCategory) => {
        if(selectedFilters.includes(selectedCategory)){
            let filter = selectedFilters.filter( (el) => el !== selectedCategory);
            setSelectedFilters(filter);
        }else{
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    }

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);


    const filterItems = () => {
        if(selectedFilters.length > 0){
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = courses.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        }else{
            setFilteredItems([...courses]);
        }
    }

    return (
        <div>
            <div className='filter-container'>
            {
                filter.map( (category, idx) => { <button onClick={handleFilterButtonClick(category)} className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
                key={`filters-${idx}`}
                >
                    {category}
                </button> } )
            }
            </div>
            <div className='course-container'>
                {
                    filteredItems.map( (item, idx) => {
                        <div key={`items-${idx}`} className='item'>
                        <p>{item.name}</p>
                        <p className='category'>{item.category}</p>
                        </div>
                    } )
                }
            </div>
        </div>
    )
}

export default Multifilter
