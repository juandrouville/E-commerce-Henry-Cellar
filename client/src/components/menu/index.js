import SearchBar from "../SearchBar/SearchBar";

const Menu = () => {
  return (
    // Your menu here 👇🏻
    <div>
    <div>
      <img src="PF-Vinos-Grupo14\client\src\assets\images\Home.png" alt="winelogo" />
      <h3>Henry´s Cava</h3>
    </div>
    <div>
      <img src="PF-Vinos-Grupo14\client\src\assets\images\contact.png" alt="contactlogo" />
      <h3>Contact</h3>
      <img src="PF-Vinos-Grupo14\client\src\assets\images\cart2.png" alt="cartlogo" />
      <h3>Cart</h3>
      <SearchBar />
      <img src="PF-Vinos-Grupo14\client\src\assets\images\search.png" alt="searchlogo" />
    </div>
    </div>
  )
}

export default Menu