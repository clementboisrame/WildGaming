import React, { useEffect, useState } from "react";
import axios from "axios";

import ScrollOnTop from "@components/scrollOnTop/scrollOnTop";
import CheckboxDeroulantGenre from "./components/filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "./components/filters/CheckboxDeroulantPlateforme";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/MiniCard/MiniCard";
import CardDescription from "./components/CardDescription/CardDescription";
import "./App.css";
import "./index.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import CarouselComponent from "./components/CarouselComponent";
import HeroImage from "./components/navBar/HeroImage";

function App() {
  const data = [
    {
      image:
        "https://www.lafinancepourtous.com/wp-content/thumbnails/uploads/2021/04/jeux_video_460-tt-width-460-height-260-fill-0-crop-0-bgcolor-eeeeee.png",
      caption: "free play",
    },
    {
      image:
        "https://www.economie.gouv.fr/files/styles/image_contenu_article_espace/public/files/directions_services/dgccrf/imgs/fiches_pratiques/2019/Jeux-en-ligne.jpg?itok=TNOsY2Xc",
      caption: "Play whith your friends",
    },
    {
      image:
        "https://img.offers-cdn.net/assets/uploads/offers/fr/16201806/la-selection-jeux-video-large.jpeg",
      caption: "Top selection",
    },
    {
      image:
        "https://f.hellowork.com/blogdumoderateur/2021/05/jeux-video-accenture-1200x628.jpeg",
      caption: "Top PC",
    },
    {
      image: "https://www.afjv.com/2023/02/230213-jeux-video.jpg",
      caption: "Top X-Box",
    },
    {
      image:
        "https://comarketing-news.fr/wp-content/uploads/chiffres-jeu-video.jpg",
      caption: "Pokemon World",
    },
  ];
  const [cards, setCards] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/jeux")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroImage showMenu={showMenu} setShowMenu={setShowMenu} />
      <CarouselComponent className="caroussel" data={data} />

      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "0 20px" }} />
      </div>
      <CheckboxDeroulantPlateforme />
      <CheckboxDeroulantGenre />
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="cardsContainer">
        {cards
          .filter((card) =>
            searchTerm
              ? card.titre.toLowerCase().includes(searchTerm.toLowerCase())
              : card
          )
          .map((card) => {
            return (
              <MiniCard
                cards={cards}
                card={card}
                key={card.id}
                setDescription={setDescription}
              />
            );
          })}
        {description && (
          <CardDescription
            description={description}
            setDescription={setDescription}
          />
        )}
      </section>
      <ScrollOnTop />
      <Footer />
    </div>
  );
}

export default App;
