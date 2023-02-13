import "./card.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

export function Card(props) {
  return (
    <div className="card_all hidden">
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
          <h3>{props.proj.title}</h3>
        </div>

        <p>{props.proj.tecnologias}</p>
      </div>
    </div>
  );
}
