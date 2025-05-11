export default function Projects(props) {
  const projects = [
    {
      id: 1,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2025",
      alt: "",
    },
    {
      id: 2,
      title: "al Ola",
      img: "imgs/services.jpg",
      date: "2025",
      alt: "",
    },
    {
      id: 3,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2024",
      alt: "",
    },
    {
      id: 4,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2024",
      alt: "",
    },
    {
      id: 5,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2024",
      alt: "",
    },
    {
      id: 6,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2023",
      alt: "",
    },
    {
      id: 7,
      title: "molhem",
      img: "imgs/services.jpg",
      date: "2022",
      alt: "",
    },
  ];

  const projectsElement = projects.map((project) => {
    return (
      <div key={project.id} className="text-section">
        <img src={project.img} alt="" />
        <p>
          {project.title} <span>{project.date}</span>
        </p>
      </div>
    );
  });
  return (
    <section className="projects">
      <h2>{props.title}</h2>
      <div className="project">{projectsElement}<h3>And Many More...</h3></div>
      
      <h2>in Collaboration with:</h2>

      <div className="logos">
        <div className="logos-slider">
          <img src="imgs/Almatar.png" alt="" />
          <img src="imgs/AlUla Guide.png" alt="" />
          <img src="imgs/emkan.png" alt="" />
          <img
            src="imgs/Ministry of municipal & rural affairs.png"
            alt=""
          />
          <img
            src="imgs/Princess nourah bin abdulrahman university.png"
            alt=""
          />
          <img src="imgs/Qitaf-01.png" alt="" />
          <img src="imgs/Saudi Falcons Club.png" alt="" />
          <img src="imgs/Sports Boulevard New-01.png" alt="" />
          <img src="imgs/Taqeem-01.png" alt="" />
          <img src="imgs/Qitaf-01.png" alt="" />
          <img src="imgs/Saudi Falcons Club.png" alt="" />
          <img src="imgs/Sports Boulevard New-01.png" alt="" />
          <img src="imgs/Taqeem-01.png" alt="" />
              </div>
              <div className="logos-slider">
          <img src="imgs/Almatar.png" alt="" />
          <img src="imgs/AlUla Guide.png" alt="" />
          <img src="imgs/emkan.png" alt="" />
          <img
            src="imgs/Ministry of municipal & rural affairs.png"
            alt=""
          />
          <img
            src="imgs/Princess nourah bin abdulrahman university.png"
            alt=""
          />
          <img src="imgs/Qitaf-01.png" alt="" />
          <img src="imgs/Saudi Falcons Club.png" alt="" />
          <img src="imgs/Sports Boulevard New-01.png" alt="" />
          <img src="imgs/Taqeem-01.png" alt="" />
          <img src="imgs/Qitaf-01.png" alt="" />
          <img src="imgs/Saudi Falcons Club.png" alt="" />
          <img src="imgs/Sports Boulevard New-01.png" alt="" />
          <img src="imgs/Taqeem-01.png" alt="" />
              </div>
      </div>
    </section>
  );
}
