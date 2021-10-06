import React, { useEffect, useState} from 'react'
import FetchNews from './FetchNews';
import '../../../assets/css/Platform.css'

export default function SearchNews() {
    const [news, setNews] = FetchNews()
    const [searchFilter, setSearchFilter] = useState({
        search: "",
        country: "us",
        category: "technology",
      });
    
      const onChangeHandler = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        setSearchFilter((searchFilter) => {
          return {
            ...searchFilter,
            [name]: value,
          };
        });
      };
    
      useEffect(() => {
        setNews(searchFilter.search, searchFilter.country, searchFilter.category);
      }, [searchFilter, setNews]);
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
      };
    return (
        <>
        <div className="news-container">
            <form onSubmit={onSubmitHandler}>
                <div className="news-search">
                    <input
                    placeholder='Search...'
                    name='search'
                    className='news-input searchTerm'
                    onChange={onChangeHandler}
                    />
                    <button className='news-button'>
                    Submit
                    </button>
                </div>
                <div className = "form-news">
                    <select className = "form-control2" name="category" onChange={onChangeHandler} >
                            <option value="technology" selected>Technology</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                    </select>    
                    <select className = "form-control2" name="country" onChange={onChangeHandler}>
                            <option value="us" selected>United States </option> 
                            <option value="id"> Indonesia </option> 
                            <option value="br"> Brazil </option>
                            <option value="in"> India </option>
                            <option value="gb"> United Kingdom </option> 
                    </select>
                </div>
            </form>
        </div>
        </>
    )
}
