import "./card.css";

export function Card(props) {
  return (
    <div className="card_all">
      <div className="card_img">
        <a target="_blank" href={props.proj.link}>
          <img
            className="card_image"
            src={props.proj.image}
            alt={props.proj.title}
          />
        </a>
      </div>
      <div className="card_description">
        <div className="card_title">
          <h2>{props.proj.title}</h2>
        </div>

        <p>{props.proj.tecnologias}</p>
      </div>
    </div>
  );
}
