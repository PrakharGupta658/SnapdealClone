import React, { createContext } from "react";

const ProductContext = createContext(null);
const FilterContext = createContext(null);
const PssFilterContext = createContext(null);

export default ProductContext;
export {FilterContext , PssFilterContext};