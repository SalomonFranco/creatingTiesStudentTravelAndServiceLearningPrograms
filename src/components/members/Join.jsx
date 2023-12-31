import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import latinAmerica from "../../assets/latinamerica.png";

const Join = () => {
  const heading = (
    <>
      Embarking on an exchange <span>or tour program </span> isn't just a travel choice;
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={heading} />
            <p className="text--darkblack">
            It's a gateway to unparalleled experiences and lasting memories. These programs weave together the perfect blend of adventure and cultural immersion, offering curated insights that go beyond the guidebooks.
            </p>
            <p className="text--darkblack">
            Connecting with locals, diving into traditions, and navigating hidden gems become second nature, transforming your journey into a vibrant tapestry of unforgettable moments. It's not just a trip; it's a friendly invitation to embrace the world in a way that resonates with your curiosity and leaves you with a heart full of stories.
            </p>
          </article>
        </div>

        <figure className={styled.join__image}>
          <img src={latinAmerica} alt="LatinAmerica" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
