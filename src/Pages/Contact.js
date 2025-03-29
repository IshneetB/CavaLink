import '../styles/PageStyles.css'; 
function Contact() {
    return (
      <div className="page-container">
        <section className="page-header">
          <h1>Contact Us</h1>
          <p>Reach out with questions</p>
        </section>
  
        <div className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          {/* More form elements... */}
        </div>
  
        <div className="image-text-row reverse">
          <img src="/map.jpg" alt="Our location" />
          <div className="text-content">
            <h2>Visit Us</h2>
            <p>123 Grounds, Charlottesville</p>
          </div>
        </div>
      </div>
    );
  }