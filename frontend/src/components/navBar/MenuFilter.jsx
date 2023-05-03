import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import CheckboxDeroulantGenre from "../filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "../filters/CheckboxDeroulantPlateforme";

function MenuFilter({
  cards,
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  selectPlateformes,
  setSelectPlateformes,
  showMenu,
}) {
  return (
    <div className={!showMenu ? "MenuFilters" : "MenuFilters back"}>
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CheckboxDeroulantPlateforme
        selectPlateformes={selectPlateformes}
        setSelectPlateformes={setSelectPlateformes}
      />
      <CheckboxDeroulantGenre
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
    </div>
  );
}
export default MenuFilter;

MenuFilter.propTypes = {
  cards: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  selectedGenres: PropTypes.string.isRequired,
  setSelectedGenres: PropTypes.string.isRequired,
  selectPlateformes: PropTypes.string.isRequired,
  setSelectPlateformes: PropTypes.string.isRequired,
  showMenu: PropTypes.string.isRequired,
};
