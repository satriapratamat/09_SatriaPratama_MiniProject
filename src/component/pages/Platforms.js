import Header from "./Header"
import React, { useEffect, useState } from "react";
import New from './components/Platforms/New';
import "../assets/css/Platform.css";
import LoadingSvg from "./components/LoadingSvg";
import axios from "axios";
import Footer from "./Footer";
import SearchNews from "./components/Platforms/SearchNews";
import IndexNews from "./components/Platforms/indexNews";

function Platforms() {
    // const [news, setNews] = useState([]);
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setIsLoading(true);
    //     async function getData() {
    //         try {
    //           const data = await axios.get(
    //             "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=54554e65aa2c42d694bee8c4683fcc95"
    //           );
    //           setNews(data.data.articles);
    //           setIsLoading(false);
    //         } catch (err) {
    //           setError("Cannot show some news");
    //           setIsLoading(false);
    //         }
    //       }
    //       getData();
    // }, []);

    return ( 
        <>
        <div className="bg-image">
            <Header/>
            <p className="slider_title gadget-news">Gadget News Today</p>
            <SearchNews/>
            <IndexNews/>
        </div>
        <Footer/>
        </>
        );
}

export default Platforms