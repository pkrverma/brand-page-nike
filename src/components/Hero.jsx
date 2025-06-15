import React from "react";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Crafted for your flyest self, the new Air Jordan Collection brings
          iconic prints and elevated cuts.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="/images/flipkart.svg" alt="flipkart" />
            <img src="/images/amazon.svg" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/images/shoe_image.svg" alt="hero-img" />
      </div>
    </main>
  );
};

export default HeroSection;
