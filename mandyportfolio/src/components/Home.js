import React from 'react';

//name, job title and photo
const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div>
          <h1>Mandy Pieczynski</h1>
          <p>Digital Content Producer</p>
        </div>
        <img src="/images/mandy.jpg" alt="Mandy Pieczynski" id="home-image" />
      </div>
    </section>
  );
};

export default Home;
