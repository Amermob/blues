export default function Header() {
  window.onscroll = () => {
    if (window.scrollY >= 400) {
      document.querySelector("header").style.backgroundColor = "#001F54";
      document.querySelector("header").style.position = "fixed";
      document.querySelector("header").style.color = "#fff";
      document.querySelector(".burger-menu").style.fill = "#fff";
      document.querySelector(".arrow-up").style.display = "block";
    } else {
      document.querySelector("header").style.backgroundColor = "transparent";
      document.querySelector("header").style.position = "absolute";
      document.querySelector(".arrow-up").style.display = "none";
    }
  };

  function sideNav() {
    document.querySelector(".side-nav").style.display = "flex";
    document.querySelector(".main-nav").style.display = "none";
  }
  function closeSideNav() {
    document.querySelector(".side-nav").style.display = "none";
    document.querySelector(".main-nav").style.display = "flex";
  }

  function scrollAbout() {
    document.querySelector(".abouts").scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollServices() {
    document.querySelector(".services").scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollProject() {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollContact() {
    document.querySelector(".contact").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <svg
        className="arrow-up"
        onClick={() =>
          scroll({
            top: 0,
            behavior: "smooth",
          })
        }
        xmlns="http://www.w3.org/2000/svg"
        height="35px"
        viewBox="0 -960 960 960"
        width="35px"
        fill="#fff"
      >
        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
      </svg>
      <header>
        <a href="#">
          <img
            src="imgs/logo.jpg"
            alt=""
            onClick={() =>
              scroll({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </a>
        <nav className="main-nav">
          <ul>
            <li className="hide-in-mobile" onClick={scrollAbout}>
              About
            </li>
            <li className="hide-in-mobile" onClick={scrollServices}>
              Services
            </li>
            <li className="hide-in-mobile" onClick={scrollProject}>
              Projects
            </li>
            <li className="hide-in-mobile" onClick={scrollContact}>
              Contact
            </li>
            <li></li>
          </ul>
        </nav>
        <svg
          onClick={sideNav}
          className="burger-menu"
          id="fill"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>

        <nav className="side-nav">
          <ul>
            <svg
              onClick={closeSideNav}
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <li className="show-in-mobile" onClick={scrollAbout}>
              About
            </li>
            <li className="show-in-mobile" onClick={scrollServices}>
              Services
            </li>
            <li className="show-in-mobile" onClick={scrollProject}>
              Projects
            </li>
            <li className="show-in-mobile" onClick={scrollContact}>
              Contact
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
