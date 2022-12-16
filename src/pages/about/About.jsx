import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        distinctio dolorum similique deserunt omnis minus?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              molestiae.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              molestiae.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>
          <div className="about__section-content">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              impedit, error reprehenderit aperiam illo illum possimus a quidem
              aspernatur modi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              molestiae.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
