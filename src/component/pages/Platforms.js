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
                "https://newsapi.org/v2/everything?q=gadget&from=2021-08-30&sortBy=publishedAt&apiKey=54554e65aa2c42d694bee8c4683fcc95"
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
        <div className="bg-image">
            <Header/>
            <div className="container">
                {error && <p className="error">{error}</p>}
                {isLoading &&
                    [1, 1, 1, 1].map((el, idx) => {
                        return <LoadingSvg key={idx}/>;
                    })}
                {!error && !isLoading && (
                    <ul>
                        {news.map((e, idx) => {
                            console.log(("e adalah =", e))
                            console.log(( "idx adalah", idx))
                            return (
                                <New
                                    key={idx}
                                    title={e.title}
                                    author={e.author}
                                    image={e.urlToImage}
                                    urlLink={e.url}
                                    />
                            );
                        })}
                    </ul>
                )}
            </div>
            <Footer/>
        </div>
        );
}

export default Platforms