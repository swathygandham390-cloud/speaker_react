import {Link} from 'react-router-dom'

function Home() {
 return(
    <main className="container" id="home">
      <section className="hero">
        <div className="hero-content">
          <p className="greeting">Professional Speaker</p>
          <h1 className="name">Vivek Bindra</h1>
          <p className="role">Motivational Speaker & Leadership Coach </p>
          <p className="bio">
            I inspire individuals and organizations to unlock there potentials build confidence and turn challenges into opportunites through powerful ideas and meaningfull conversations
          </p>
          <div className="buttons">
    



            <a href="/contact" className="btn btn-primary">Book me for a Speaking Event</a>
          </div>
        </div>
         
      </section>

      <section className="section">
        <h2 className="section-title">Speaker Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="number">30+</div>
            <div className="label">statges</div>
          </div>
          <div className="stat-card">
            <div className="number">10+</div>
            <div className="label">Years of experience</div>
          </div>
          <div className="stat-card">
            <div className="number">100%</div>
            <div className="label">Focus on goals</div>
          </div>
          <div className="stat-card">
            <div className="number">10</div>
            <div className="label">Goal: grow fast</div>
          </div>
        </div>
      </section>

      <section className="section grid-two" id="about">
        <div className="card">
          <h3>About speaker</h3>
          <p>
            As a professional speaker, i deliver engaging talks on motivation leadership my goal 
          </p>
          <p>My goal is to help audience think differently overcome limitations and take meaningful action toward their goals.</p>
          <ul className="list">
            <li>Career development</li>
            <li>and Sucess</li>
            <li>Personal growth</li>
            <li>Motivation ,leadership</li>
          </ul>
        </div>
        
      </section>
      </main>
      
 );
 }

export default Home;