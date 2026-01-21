
import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import SelectItem from "../components/SelectItem";

export default function Home() {
  
  return (
    <>
      <div className="w-588">
        <h1 className="color-h1 mb-3">Movie App</h1>
        <p>
          List of movies and TV Shows, I,
          <span className="p-color"> Galal Mohamed</span> l have watched till
          date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </p>
      </div>
      <SearchInput />
      <SelectItem />
      <Footer/>
    </>
  );
}
