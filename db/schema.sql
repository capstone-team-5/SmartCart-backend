DROP DATABASE IF EXISTS cart_dev;

CREATE DATABASE cart_dev;

\c cart_dev;

CREATE TABLE store (
    store_id SERIAL PRIMARY KEY,
    store_name TEXT NOT NULL,
    store_address TEXT NOT NULL,
    store_city TEXT NOT NULL,
    store_zipCode INTEGER,
    store_image TEXT,
    store_hours TEXT NOT NULL,
    store_EBT BOOLEAN,
    store_phone_number INTEGER
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    store_id INTEGER NOT NULL REFERENCES store, -- Foreign Key
    product_name TEXT NOT NULL, 
    product_image TEXT NOT NULL, 
    product_description TEXT,
    product_category TEXT NOT NULL, 
    product_weight DECIMAL(6,2) DEFAULT 0 CHECK (product_weight >= 0),
    product_price DECIMAL(6,2) NOT NULL DEFAULT 0 CHECK (product_price >= 0),
    product_discount DECIMAL(4,2) DEFAULT 0 CHECK (product_discount >= 0),
    product_unit TEXT,
    product_brand TEXT,
    product_allergens TEXT,
    product_special_diet TEXT,
    product_health_label TEXT,
    product_certification TEXT,
    product_is_fresh BOOLEAN DEFAULT false,
    product_is_frozen BOOLEAN DEFAULT false,
    product_is_halal BOOLEAN DEFAULT false,
    product_is_kosher BOOLEAN DEFAULT false,
    product_is_non_processed BOOLEAN DEFAULT false, 
    product_is_organic BOOLEAN DEFAULT false, 
    product_is_vegetarian BOOLEAN DEFAULT false, 
    product_is_stock BOOLEAN DEFAULT true,
    product_is_vegan BOOLEAN DEFAULT false, 
    product_is_seafood BOOLEAN DEFAULT false
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT NOT NULL,
    review_title TEXT NOT NULL,
    review_rating NUMERIC,CHECK (rating >= 0 rating <= 5)
    review_content TEXT NOT NULL,
    review_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,--sets the default value for the column as the current timestamp if one is not provided explicitly.
    product_id INTEGER NOT NULL REFERENCES product(id)
    ON DELETE CASCADE
    -- on delete cascade tells postgres to also delete the row in the child table ,if the corresponding row in products is deleted 
);