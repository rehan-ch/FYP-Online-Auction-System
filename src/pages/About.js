import React from "react";
import "../styles/AboutUs.css"; // Import the CSS file for styling
import Layout from "../components/Layout/Layout";
import person from "../images/Person.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Manager",
      bio: "Experienced manager with a proven track record of driving team performance and achieving strategic goals. Skilled in effective communication, problem-solving, and fostering collaborative work environments.",
    },
    {
      name: "Jane Smith",
      role: "Developer",
      bio: "Experienced Developer proficient in many programming languages.",
    },
    // Add more team members here with their details
  ];

  return (
    <Layout>
      <div className="about-us-container">
        <h1>Introduction to Auctioning</h1>

        <section className="content-container">
          <p>
            Auctioning is a time-honored method of buying and selling goods or
            services to the highest bidder. It involves a public event or an
            online platform where participants place competing bids to acquire
            the desired item. Auctions are widely used in various industries,
            including art, real estate, automobiles, and more.
          </p>

          <p>
            For sellers, auctions offer a platform to reach a wide audience and
            generate competitive prices for their items. By allowing potential
            buyers to bid against each other, sellers can maximize the value of
            their goods or services. Auctions also provide a quick and efficient
            way to sell assets, especially in situations where time is of the
            essence.
          </p>
          <p>
            Our auction website aims to provide a user-friendly and secure
            platform for buyers and sellers to engage in the exciting world of
            auctioning. We strive to create an environment that promotes fair
            competition, transparency, and exceptional user experiences.
          </p>
        </section>
        <h1>Our Mission and Vision</h1>

        <section className="content-container">
          <p>
            At BidSpot, our mission is to revolutionize the auctioning
            experience by providing a reliable, transparent, and user-centric
            platform. We aim to connect buyers and sellers from various
            industries and empower them to achieve their goals efficiently. Our
            vision is to become the leading online auction platform, known for
            innovation, exceptional service, and a thriving community.
          </p>
        </section>
        <h1 className="text-center">Meet Our Team</h1>

        <section className="content-container">
          <div className="team-container">
            <div className="team-member">
            <div>
                {" "}
                <img src={person} height={100} width={100} />{" "}
              </div>
              <h3>John Doe</h3>
              <h4>Manager</h4>
              <p>{teamMembers[0].bio}</p>
            </div>
            <div className="team-member">
              <div>
                {" "}
                <img src={person} height={100} width={100} />{" "}
              </div>
              <h3>Jane Smith</h3>
              <h4>Developer</h4>
              <p>{teamMembers[1].bio}</p>
            </div>
            {/* Add more team members */}
          </div>
        </section>
        <h1>Our Values and Culture</h1>

        <section className="content-container">
          <p>
            At BidSpot, we value integrity, transparency, and customer
            satisfaction. We believe in fostering a culture of collaboration,
            continuous learning, and innovation. Our team is dedicated to
            delivering high-quality services, building strong relationships with
            our users, and adapting to the ever-evolving auction industry.
          </p>
        </section>

        <h1>Contact Information</h1>

        <section className="content-container">
          <p>
            Email: onlineauctionappadm123@gmail.com
            <br />
            Phone: +92 311 6160085
            <br />

            Phone: +92 302 7631197

          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
