DROP DATABASE IF EXISTS cart_dev;

CREATE DATABASE cart_dev;

\c cart_dev;

CREATE TABLE store (
    store_id SERIAL PRIMARY KEY,
    store_name TEXT NOT NULL,
    store_address TEXT NOT NULL,
    store_city TEXT NOT NULL,
    store_state TEXT NOT NULL,
    store_zipCode INTEGER NOT NULL,
    store_latitude DOUBLE PRECISION NOT NULL,
    store_longitude DOUBLE PRECISION NOT NULL,
    store_image TEXT,
    store_hours TEXT NOT NULL,
    store_accepts_EBT BOOLEAN DEFAULT true,
    store_phone_number TEXT NOT NULL
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL, 
    product_image TEXT NOT NULL, 
    product_description TEXT,
    product_category TEXT NOT NULL, 
    product_weight DECIMAL(6,2) DEFAULT 0 CHECK (product_weight >= 0),
    product_unit TEXT,
    product_brand TEXT,
    product_is_fresh BOOLEAN DEFAULT false,
    product_is_frozen BOOLEAN DEFAULT false,
    product_is_halal BOOLEAN DEFAULT false,
    product_is_kosher BOOLEAN DEFAULT false,
    product_is_non_processed BOOLEAN DEFAULT false, 
    product_is_organic BOOLEAN DEFAULT false, 
    product_is_vegetarian BOOLEAN DEFAULT false, 
    product_is_stock BOOLEAN DEFAULT true,
    product_is_vegan BOOLEAN DEFAULT false, 
    product_is_seafood BOOLEAN DEFAULT false,
    product_is_gluten BOOLEAN DEFAULT false
);

CREATE TABLE store_product (
    store_product_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES product ON DELETE CASCADE,
    store_id INTEGER NOT NULL REFERENCES store ON DELETE CASCADE,
    product_price DECIMAL(6,2) NOT NULL DEFAULT 0 CHECK (product_price >= 0),
    product_discount DECIMAL(4,2) DEFAULT 0 CHECK (product_discount >= 0),
);

CREATE TABLE shopper (
  shopper_firebase_uid TEXT PRIMARY KEY UNIQUE NOT NULL,
  shopper_email VARCHAR(255) UNIQUE NOT NULL,
  shopper_first_name VARCHAR(255) NOT NULL,
  shopper_last_name VARCHAR(255) NOT NULL,
  shopper_profile_pic TEXT,
  shopper_instagram_link TEXT,
  shopper_facebook_link TEXT,
  shopper_dietary_preferences TEXT[]
);

CREATE TABLE review (
    review_id SERIAL PRIMARY KEY,
    shopper_firebase_uid TEXT NOT NULL REFERENCES shopper ON DELETE CASCADE,
    store_id INTEGER NOT NULL REFERENCES store ON DELETE CASCADE, 
    review_rating NUMERIC NOT NULL CHECK (review_rating >= 1 AND review_rating <= 5),
    review_comment TEXT,
    review_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE favorite (
    shopper_firebase_uid TEXT NOT NULL REFERENCES shopper,
    product_id INTEGER NOT NULL REFERENCES product,
    PRIMARY KEY (shopper_firebase_uid, product_id)
); 

-- on delete cascade tells postgres to also delete the row in the child table ,if the corresponding row in products is deleted

-- User inputs zip + distance
-- React converts zip to long lat
-- React queries all stores
-- React goes through every store and compares distance, filters for all stores that are < dist away

