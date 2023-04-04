import "./Article.css";

export default function Article(props) {
  console.log(props)
  return (
    <>
      <time datetime="2020-12-11" className="date">
        {props.date}
      </time>
      <h1 className="article-title">{props.title}</h1>
      <img
        className="article-img"
        src={props.src}
        alt={props.alt}
      />
      <p> {props.p} </p>
      <a className="link-continues" href="...">
        Continues ...
      </a>
    </>
  );
}
