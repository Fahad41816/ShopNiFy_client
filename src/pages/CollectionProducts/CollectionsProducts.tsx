/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetProductsQuery } from "../../Redux/feature/Product/ProductApi";
import Loader from "../../components/UI/Loader";
import FilterSortsection from "./FilterSortsection";
import ProductCard from "../../components/ProductCard/ProductCard";

const CollectionsProducts = () => {
  const { categoryName } = useLoaderData();
  const [searchParams] = useSearchParams();

  const searchTerms = searchParams.get("search");

  // States for filtering, sorting, and pagination
  const [sort, setSort] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [status, setStatus] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [page, setPage] = useState(1); // Reset page
  const [products, setProducts] = useState<any[]>([]); // Reset products
  const [hasMore, setHasMore] = useState(true);

  // Handle filter and sort changes
  const handleFilterChange = (option: string, value: any) => {
    setPage(1); // Reset page
    setProducts([]); // Reset products on filter/sort change
    setHasMore(true); // Reset infinite scroll
    if (option === "sort") {
      if (value === "A-Z") {
        setSort("title");
        setSortOrder("asc");
      } else if (value === "Z-A") {
        setSort("title");
        setSortOrder("desc");
      } else if (value === "priceLow") {
        setSort("price");
        setSortOrder("asc");
      } else {
        setSort("price");
        setSortOrder("desc");
      }
    } else if (option === "status") {
      setStatus(value);
    } else if (option === "minPrice") {
      setMinPrice(value);
    } else if (option === "maxPrice") {
      setMaxPrice(value);
    }
  };

  // Fetch product data with infinite scroll
  const { data, isLoading, refetch } = useGetProductsQuery({
    searchTerm: searchTerms,
    category: categoryName,
    priceRange: { minPrice, maxPrice },
    Availability: status,
    sortBy: { sort, sortOrder },
    page, // Pass the page number
  });

  // Reset state when the component mounts
  useEffect(() => {
    setPage(1);
    setProducts([]);
    setHasMore(true);
    refetch(); // Fetch fresh data
  }, [categoryName, searchTerms, refetch]);

  // Update products when data changes
  useEffect(() => {
    if (data?.data?.data?.length) {
      if (page === 1) {
        setProducts(data.data.data); // Replace the list for page 1
      } else {
        // Append new data and filter duplicates
        setProducts((prev) => {
          const newProducts = data.data.data.filter(
            (newProduct: any) => !prev.some((prevProduct) => prevProduct.id === newProduct.id)
          );
          return [...prev, ...newProducts];
        });
      }
      if (data.data.data.length < 10) {
        setHasMore(false); // Stop further loading
      }
    } else {
      setHasMore(false);
    }
  }, [data?.data?.data, page]);

  // Function to fetch next page
  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading && page === 1) {
    return <Loader />;
  }

  return (
    <section className="max-w-7xl mx-auto py-5">
      <h1 className="text-2xl font-semibold">{categoryName}</h1>

      {/* Filter and Sort Section */}
      <div className="max-w-7xl mx-auto z-10">
        <FilterSortsection
          handleFilterChange={handleFilterChange}
          status={status}
        />
      </div>

      {/* Product Grid with Infinite Scroll */}
      <InfiniteScroll
        dataLength={products.length} // Length of the current products list
        next={fetchNextPage} // Function to load more data
        hasMore={hasMore} // Stop infinite scroll if no more data
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <b>Yay! You have seen it all 🎉</b>
          </p>
        }
      >
        <div className="grid grid-cols-5 gap-5 mt-5">
          {products.map((data: any, index: number) => (
            <ProductCard key={index} pdt={data} />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default CollectionsProducts;
