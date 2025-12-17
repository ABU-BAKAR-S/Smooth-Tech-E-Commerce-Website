import React, { useContext } from "react";

import { Circles } from "react-loader-spinner";
import { Product } from "../component/product";
import { ProductsContext } from "../context";
import { Header } from "../layouts/header/Header";
import { useScrollRestoration } from "../component/customHook/useScrollRestoration";

export const Home = () => {
  useScrollRestoration();

  const {
    products,
    error,
    isLoading,
    incrementCount,
    searchItems,
    disableBtn,
  } = useContext(ProductsContext);

  const filteredProducts = searchItems
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchItems)
      )
    : products;

  const handleShowMore = () => {
    incrementCount();
  };

  return (
    <>
      <Header title="Shop" />
      <main>
        {error && <p> {error} </p>}

        {isLoading ? (
          <div className="loader">
            <Circles
              height={"120"}
              width={"120"}
              color="#009688"
              visible={true}
            />
          </div>
        ) : (
          <section>
            {filteredProducts && filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <p> No Product Found! </p>
            )}
          </section>
        )}
        <div className="show_more_container">
          <button
            className={disableBtn ? "disablebtn" : "show_more_btn"}
            onClick={handleShowMore}
            disabled={disableBtn}
          >
            Show More
          </button>
        </div>
      </main>
    </>
  );
};
