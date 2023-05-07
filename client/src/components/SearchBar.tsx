import { useState } from "react"
import { Product } from "../types"

function SearchBar({ allProducts, setProducts }: { allProducts: Product[], setProducts: React.Dispatch<React.SetStateAction<Product[]>> }) {
  const [searchInput, setSearchInput] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = event.target.value
    const filtered: Product[] = allProducts.filter((product) => {
      return product.name.toLowerCase().match(input.toLowerCase());
    });
    setProducts(filtered)
    setSearchInput(event.target.value);
  };

  return (
    <div className="searchbar_outer_div">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 22 22" className="searchbar_icon">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        type="text"
        id="shop_searchbar"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    </div>
  )
}

export default SearchBar