import axios from "axios";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNews } from "../../../../store/actions";

export default function FetchNews() {
    const { news } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setNews = useCallback(
    async (q, country, category) => {
        try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=54554e65aa2c42d694bee8c4683fcc95&q=${q}&category=${category}&country=${country}`);
        const updatedNews = response.data.articles.map((article) => {
            return {
            title: article.title,
            description: article.description,
            urlLink: article.url,
            author: article.author,
            urlToImage: article.urlToImage,
            };
        });
        dispatch(updateNews(updatedNews));
        } catch (err) {
        console.error(err);
        }
    },
    [dispatch]
    );
    return [news, setNews];
}
