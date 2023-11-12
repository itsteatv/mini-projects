import "./App.css";
import headerImage from "./assets/bg-pattern-card.svg";
import profilePicture from "./assets/image-victor.jpg";

function App() {
  return (
    <main>
      <section className="main-container">
        <img className="header-image" src={headerImage} alt="HeaderImage" />
        <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
        <section className="details">
          <h1>
            Victor Crest <span>26</span>
          </h1>
        </section>
        <p className="location">London</p>
        <hr />
        <section className="info-container">
          <section className="followers">
            <h2>80K</h2>
            <p>Followers</p>
          </section>
          <section className="like">
            <h2>803K</h2>
            <p>Likes</p>
          </section>
          <section className="photos">
            <h2>1.4K</h2>
            <p>Photos</p>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
