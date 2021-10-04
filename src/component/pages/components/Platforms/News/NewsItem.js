import moment from "moment";
import "./NewsItem.css";

const NewsItem = ({ author, content, description, image, publishedAt, source, title }) => {
  const newContent = content ? content.replace(/\[.*?\]/g, "").replace("…", "") : content;
  console.log(image);
  return (
    <div className={"blog-card"}>
      <div className="meta">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${image ? image : "https://i.stack.imgur.com/y9DpT.jpg"})`,
          }}
        ></div>
        <ul className="details">
          <li className="author">
            <a href={author}>{author}</a>
          </li>
          <li className="date">{moment(publishedAt).format("LL")}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p> {newContent}</p>
        <p className="read-more">
          <a href={source} target="_blank" rel="noreferrer">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
