import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Buscar produtos"
          className="search_input"
          required
        />

        <button type="submit" className="search_button">
          <CiSearch />
        </button>
      </form>
    </>
  );
}
