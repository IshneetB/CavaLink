import '../../styles/PageStyles.css'; 
function About() {
  return (
    <div className="page-container"> {/* Main container */}
      <section className="page-header"> {/* Header section */}
        <h1>About Us</h1>
        <p>Learn about our mission</p>
      </section>

      <div className="image-text-row"> {/* Image + text row */}
        <img 
          src="/team-photo.jpg" 
          alt="Our team" 
          className="content-image" 
        />
        <div className="text-content">
          <h2>Our Story</h2>
          <p>Founded in 2023, we connect UVA students...</p>
        </div>
      </div>

      <div className="card-grid"> {/* Card layout */}
        <div className="card">
          <img src="/member1.jpg" className="card-image" alt="Team member" />
          <div className="card-body">
            <h3 className="card-title">John Doe</h3>
            <p>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}