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
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    </div>
  )
}

export default SearchBar