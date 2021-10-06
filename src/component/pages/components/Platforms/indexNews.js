import React,{useEffect,useState} from 'react'
import FetchNews from './FetchNews';
import LoadingSvg from '../LoadingSvg';
import New from './New';

const IndexNews = () => {
    const [news, setNews] = FetchNews();
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setNews();
    }, [setNews]);

    return (
        // < className="container">
        //     {error && <p className="error">{error}</p>}
        //     {isLoading &&
        //         [1, 1, 1, 1].map((el, idx) => {
        //             return <LoadingSvg key={idx}/>;
        //         })}
        //     {!error && !isLoading && (
        <div className="news-wrapper">
            {news.map((e, idx) => (
                <New
                key={idx}
                title={e.title}
                author={e.author}
                image={e.urlToImage}
                urlLink={e.url}
                description={e.description}
                />
            ))}
         </div>
    )
};

export default IndexNews;
