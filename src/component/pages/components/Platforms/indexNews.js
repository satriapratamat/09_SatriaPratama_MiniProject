import React,{useEffect,useState} from 'react'
import FetchNews from './FetchNews';
import LoadingSvg from '../LoadingSvg';
import New from './New';

const IndexNews = () => {
    const [news, setNews] = FetchNews();
    useEffect(() => {
        setNews();
    }, [setNews]);

    return (
        <div className="news-wrapper">
            {news.map((e, idx) => (
                <New
                key={idx}
                title={e.title}
                author={e.author}
                image={e.urlToImage}
                url={e.url}
                description={e.description}
                />
            ))}
         </div>
    )
};

export default IndexNews;
