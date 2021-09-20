import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
    return (
        <section className="my-5" >
          <h1 id="about">Software Developer</h1>
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
          <div className="my-2">
            <p>
              Hey There! Welcome to my portfolio! My name is Jazmyne Bradley. I graduated from the University Of Arizona with a B.S in Information Science and Technology and a minor in Systems Engineering as well as Africana Studies. When I am get distracted with work on the weekdays, I like to go hiking, going to the gym and trying new foods either at restaurants or daring myself to recreate a dish. You know when people go take a walk to clear their mind or wind down, programming is my "winding down". I used to love solving logic puzzles in elementary school and still to this day. I know it's kind of odd seeing a kid solve logic puzzles rather word searches. However, coding and programming are my logic puzzles. I love the thrill of challenges and figuring out a problem to not only solve, but to develop something! Thanks for visiting my portfolio. I hope you enjoy! 
          </p>
          </div>
        </section>
      )
    }

export default About;