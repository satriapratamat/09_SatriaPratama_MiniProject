import Header from "./Header"
import React, { useEffect, useState } from "react";
import New from './components/Platforms/New';
import "../assets/css/Platform.css";
import LoadingSvg from "./components/LoadingSvg";
import axios from "axios";
import Footer from "./Footer";

function Platforms() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            try {
              const data = await axios.get(
                "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=54554e65aa2c42d694bee8c4683fcc95"
              );
              setNews(data.data.articles);
              setIsLoading(false);
            } catch (err) {
              setError("Cannot show some news");
              setIsLoading(false);
            }
          }
          getData();
    }, []);

    return ( 
        <>
        <div className="bg-image">
            <Header/>
            <p className="slider_title gadget-news">Gadget News Today</p>
            <div className="news-container">
                <div className="news-search">
                    <input
                    placeholder='Search...'
                    name='text'
                    className='news-input'
                    />
                    <button className='news-button'>
                    Submit
                    </button>
                </div>
                <div className = "form-news">
                    <select className = "form-control2" name = "sort-by" id = "exampleFormControlSelect1" placeholder = "Sort by" >
                            <option disabled selected>Sort by</option>
                            <option> Relevancy </option> 
                            <option> Time </option> 
                            <option> Most Viewed </option>
                            <option> Popular </option>
                        </select>    
                    <select className = "form-control2" name = "filter-by" id = "exampleFormControlSelect1" placeholder = "Filter by" >
                            <option disabled selected>Country</option>
                            <option> United States </option> 
                            <option> Indonesia </option> 
                            <option> Brazil </option>
                            <option> India </option>
                            <option> United Kingdom </option> 
                        </select>
                </div>
            </div>
            <div className="container">
                {error && <p className="error">{error}</p>}
                {isLoading &&
                    [1, 1, 1, 1].map((el, idx) => {
                        return <LoadingSvg key={idx}/>;
                    })}
                {!error && !isLoading && (
                    <div className="news-wrapper">
                        {news.map((e, idx) => {
                            console.log(("e adalah =", e))
                            console.log(( "idx adalah", idx))
                            return (
                                <>
                                <New
                                    key={idx}
                                    title={e.title}
                                    author={e.author}
                                    image={e.urlToImage}
                                    urlLink={e.url}
                                    content={e.description}
                                    />
                                </>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>
        );
}

export default Platforms