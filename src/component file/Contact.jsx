export default function Contact(props) {
  function formData(formData) {
    const name = formData.get("name:");
    const email = formData.get("e-mail:");
    const mobile = formData.get("phone:");
    const fromWho = formData.get("from-who:");
    const textArea = formData.get("more-info:");
    const dataObj = [
      { dataName:  name },
      { dataEmail: email },
      { dataMobile: mobile },
      { dataFromWho: fromWho },
      { dataTextArea: textArea },
    ];
    console.log(dataObj);
  }

  return (
    <>
      <section className="contact">
        <h2>{props.title}</h2>
        <img src="/imgs/contact.jpg" alt="" />
        <div className="box">
          <div className="socials">
            <iframe
              className="hide-in-mobile"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.219189733611!2d46.6742791!3d24.684990799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a1ff362627%3A0x3b14e5ce847657a6!2zQmx1ZSBBcnJvdyBFdmVudHMg2KfZhNiz2YfZhSDYp9mE2KPYstix2YIg2YTYqtmG2LjZitmFINin2YTZhdi52KfYsdi2INmI2KfZhNmF2KTYqtmF2LHYp9iq!5e0!3m2!1sen!2ssa!4v1746872323808!5m2!1sen!2ssa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
            <h3>Our Socials:</h3>
            <div className="network">
              <a
                target="_blank"
                href="https://www.instagram.com/blue_arrowksa?igsh=MWl6ZGVzZ3c1YzNscQ=="
              >
                <img src="/imgs/instagram.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/bluearrowksa/"
              >
                <img src="/imgs/linkedin.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://x.com/Blue_Arrowksa?t=-v3Jcdq5NyqaRfrN_9Y8iA&s=09"
              >
                <img src="/imgs/X.svg" alt="" />
              </a>
              <a target="_blank" href="tel:+966-50-467-5153">
                <img src="/imgs/call.svg" alt="" />
              </a>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/tRgjgesdS8zPJ7m79"
              >
                <img
                  className="show-in-mobile"
                  src="/imgs/location.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <form action={formData} target="_blank" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name:" id="name" required />
            <label htmlFor="e-mail">E-mail:</label>
            <input type="email" name="e-mail:" id="e-mail" />
            <label htmlFor="phone">Mobile:</label>
            <input type="number" name="phone:" id="phone" />
            <label htmlFor="from-who">Representative:</label>
            <input type="text" name="from-who:" id="from-who" />
            <label htmlFor="more-info">
              For More Information Please Let Us Know:
            </label>
            <textarea name="more-info:" id="more-info"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
