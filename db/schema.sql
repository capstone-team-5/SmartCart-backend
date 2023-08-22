DROP DATABASE IF EXISTS cart_dev;

CREATE DATABASE cart_dev;

\c cart_dev;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    store_id INTEGER NOT NULL REFERENCES stores,
    product_name TEXT NOT NULL, 
    product_image TEXT NOT NULL, 
    product_description TEXT,
    product_category TEXT NOT NULL, 
    product_weight DECIMAL(6,2) DEFAULT 0 CHECK (product_weight >= 0),
    product_unit TEXT,
    product_price DECIMAL(6,2) NOT NULL DEFAULT 0 CHECK (product_price >= 0),
    product_brand TEXT,
    product_allergens TEXT,
    product_special_diet TEXT,
    product_health_label TEXT,
    product_certification TEXT,
    product_discount DECIMAL(4,2) DEFAULT 0 CHECK (product_discount >= 0)
    product_is_fresh BOOLEAN DEFAULT false,
    product_is_frozen BOOLEAN DEFAULT false,
    product_is_halal BOOLEAN DEFAULT false,
    product_is_kosher BOOLEAN DEFAULT false,
    product_is_non_processed BOOLEAN DEFAULT false, 
    product_is_organic BOOLEAN DEFAULT false, 
    product_is_vegetarian BOOLEAN DEFAULT false, 
    product_is_stock BOOLEAN DEFAULT true,
    product_is_seafood BOOLEAN DEFAULT false,  // CHECK CHECK CHECK
);