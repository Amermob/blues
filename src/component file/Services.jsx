export default function Services(props) {
  return (
    <section className="services">
      <h2>{props.title}</h2>
      <div className="box">
        <div className="box-element">
          <p>Exhibition & Booth Design</p>
          <img src="imgs/services.jpg" alt="" />
        </div>
        <div className="box-element">
          <p>Light & Sound System</p>
          <img src="imgs/services.jpg" alt="" />
        </div>
        <div className="box-element">
          <p>Weddings & Parties</p>
          <img src="imgs/services.jpg" alt="" />
        </div>
        <div className="box-element">
          <p>Corporation Events & Conference</p>
          <img src="imgs/services.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
