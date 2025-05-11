export default function About(props) {
  return (
    <section className="abouts">
      <h2>{props.title}</h2>
      <div className="about-container">
        <div className="about">
          <img src="imgs/about.jpg" alt="" />
          <p>
            {" "}
            <span>What we Represent:</span> <br />
            Blue Arrow is a Saudi foundation specializing in organizing,
            implementing, and managing exhibitions and events.
          </p>
        </div>

        <div className="vision">
          <img src="imgs/goal.jpg" alt="" />

          <p>
            {" "}
            <span>Our Vision:</span> <br />
            Blue Arrow is a Saudi foundation specializing in organizing,
            implementing, and managing exhibitions and events.
          </p>
        </div>

        <div className="goal">
          <img src="imgs/vision.jpg" alt="" />

          <p>
            {" "}
            <span>Our Goals:</span> <br />
            Blue Arrow is a Saudi foundation specializing in organizing,
            implementing, and managing exhibitions and events.
          </p>
        </div>
      </div>
    </section>
  );
}
