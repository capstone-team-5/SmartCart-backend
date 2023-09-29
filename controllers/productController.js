const express = require("express");
const product = express.Router();
const {
  getAllProducts,
  getOneProduct,
  getAllCategories,
  getAllProductsOneCategory,
  getfourCart,
  getfourMRT,
  getfourGreens,
  getfourFruits,
  getAllDairy,
  getAllVegetables,
  getAllFruits,
  getAllNuts,
  getAllSpices,
  getAllLegumes,
  getAllSnacks,
  getAllGrains,
  getAllBakery,
  getAllMeat,
  getAllInternational,
  // getFilteredProducts,
} = require("../queries/productQuery.js");

// INDEX - show all products

product.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all categories

product.get("/categories", async (req, res) => {
  const allCategories = await getAllCategories();
  if (allCategories[0]) {
    res.status(200).json(allCategories);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all meat, seafood, poultry

product.get("/meat", async (req, res) => {
  const allMeat = await getAllMeat();
  if (allMeat[0]) {
    res.status(200).json(allMeat);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all grains

product.get("/grains", async (req, res) => {
  const allGrains = await getAllGrains();
  if (allGrains[0]) {
    res.status(200).json(allGrains);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all bakery, bread

product.get("/bakery", async (req, res) => {
  const allBakery = await getAllBakery();
  if (allBakery[0]) {
    res.status(200).json(allBakery);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all snacks

product.get("/snacks", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all Legumes

product.get("/legumes", async (req, res) => {
  const allLegumes = await getAllLegumes();
  if (allLegumes[0]) {
    res.status(200).json(allLegumes);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all Spices

product.get("/spices", async (req, res) => {
  const allSpices = await getAllSpices();
  if (allSpices[0]) {
    res.status(200).json(allSpices);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all Nuts

product.get("/nuts", async (req, res) => {
  const allNuts = await getAllNuts();
  if (allNuts[0]) {
    res.status(200).json(allNuts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all International

product.get("/international", async (req, res) => {
  const allInternational = await getAllInternational();
  if (allInternational[0]) {
    res.status(200).json(allInternational);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all fruits

product.get("/fruits", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Extract page from query parameters or default to 1

  try {
    const allFruits = await getAllFruits(page);
    res.status(200).json(allFruits);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all vegetables

product.get("/vegetables", async (req, res) => {
  const allVegetables = await getAllVegetables();
  if (allVegetables[0]) {
    res.status(200).json(allVegetables);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all dairy

product.get("/dairy", async (req, res) => {
  const allDairy = await getAllDairy();
  if (allDairy[0]) {
    res.status(200).json(allDairy);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show 4 fruits

product.get("/fourFruits", async (req, res) => {
  const fourFruits = await getfourFruits();
  if (fourFruits[0]) {
    res.status(200).json(fourFruits);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show CART in 4 images

product.get("/fourCart", async (req, res) => {
  const fourCart = await getfourCart();
  if (fourCart[0]) {
    res.status(200).json(fourCart);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show $mrt in 4 images

product.get("/fourMRT", async (req, res) => {
  const fourMRT = await getfourMRT();
  if (fourMRT[0]) {
    res.status(200).json(fourMRT);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show 4 Greens

product.get("/fourGreens", async (req, res) => {
  const fourGreens = await getfourGreens();
  if (fourGreens[0]) {
    res.status(200).json(fourGreens);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all products for one selected category

product.get("/categories/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const allProductsOneCategory = await getAllProductsOneCategory(category);
    if (allProductsOneCategory.length > 0) {
      res.status(200).json(allProductsOneCategory);
    } else {
      res
        .status(404)
        .json({ error: "No products found for the given category" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Show one product by id

product.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getOneProduct(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Product Not Found" });
  } else if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(200).json(result);
  }
});

// Filter - Filter based on user selected options

// product.get("/filter", async (req, res) => {
//   const filters = req.query;
//   const query = buildQuery(filters);
//   try {
//     const filteredProducts = await getFilteredProducts(query);

//     if (filteredProducts.length > 0) {
//       res.status(200).json(filteredProducts);
//     } else {
//       res
//         .status(404)
//         .json({ error: "No products found for the given category" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// const buildQuery = (filters) => {
//   const query = {};

//   Object.keys(filters).forEach((category) => {
//     filters[category].forEach((filter) => {
//       if (filter.checked) {
//         const backendField = mapToFrontendToBackend(filter.name); // Helper function to map frontend to backend Use the filter name to map to the backend
//         query[backendField] = true; // Set the backend field to true for checked filters
//       }
//     });
//   });

//   return query;
// };

// const mapToFrontendToBackend = (key) => {
//   const mapping = {
//     Vegan: "product_is_vegan",
//     Vegetarian: "product_is_vegetarian",
//     // Add other mappings as needed
//   };

//   return mapping[key] || key; // Default to key if not found in mapping
// };

module.exports = product;
