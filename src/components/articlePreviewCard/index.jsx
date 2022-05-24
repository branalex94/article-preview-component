import "./articlePreviewCard.css";
import Image from "/src/assets/images/drawers.jpg";
import Avatar from "/src/assets/images/avatar-michelle.jpg";
import Attribution from "../attribution";
import CardDescription from "../cardDescription";
import AuthorInfo from "../authorInfo";

export default function ArticlePreviewCard() {
  return (
    <>
      <main className="main__preview-card">
        <header className="main__header">
          <img src={Image} alt="" className="header__image" />
        </header>
        <section className="section__bottom-side">
          <CardDescription
            cardTitle="Shift the overall look and feel by adding these wonderful touches to
        furniture in your home"
            cardText=" Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete."
          />
          <footer className="footer__author-info">
            <AuthorInfo
              name="Michelle Appleton"
              date="28 Jun 2020"
              avatar={Avatar}
            />
          </footer>
        </section>
      </main>
      <Attribution
        coder="Brandon Aray"
        coderUrl="https://www.frontendmentor.io/profile/branalex94"
      />
    </>
  );
}
