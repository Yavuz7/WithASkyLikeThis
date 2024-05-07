import "./SearchBar.style.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <h2 className="textToHide">Enter Your City</h2>
      <input
        className="searchBarTextInput"
        type="text"
        placeholder="Type Here..."
      />
    </div>
  );
}
