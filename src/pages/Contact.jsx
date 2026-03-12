import './Contact.css';

export default function Contact() {
  return (
    <section className="contact page">
      <div className="container stack-lg">
        {/* <div className="contact-head surface stack-md">
          <p className="eyebrow">Get in touch</p>
          <h1>Tell me about the system you need.</h1>
          <p className="muted">I focus on internal products, automation, and operational workflows. Share a bit about your team and the problem you want to solve.</p>
        </div> */}

        <div className="contact-embed surface">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfi05otYmmdNOl-HQrPGOXu2btHtbCksOBrNeYCtL3ytmwokw/viewform?embedded=true"
            // width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact form"
          >Loading…</iframe>
        </div>
      </div>
    </section>
  );
}
