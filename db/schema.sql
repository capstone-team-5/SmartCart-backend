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

  

  