\c cart_dev;

INSERT INTO store (store_name, store_address, store_city, store_state, store_zipCode, store_image, store_hours, store_accepts_EBT, store_phone_number)
VALUES
    ('City Fresh Market', '229 Knickerbocker Ave #2401', 'Brooklyn', 'NY', 11237, 'store1.jpg', 'Mon - Sat 24 hours', true, '(123) 456-7890'),
    ('Mr. Lemon', '410 Knickerbocker Ave', 'Brooklyn', 'NY', 11237, 'store3.jpg', '7:00 AM - 11:00 PM', false, '(987) 654-3210'),
    ('bp', '1379 Halsey St', 'Brooklyn', 'NY', 11237, 'store5.jpg', 'Mon-Fri: 8am-10pm, Sat-Sun: 9am-9pm', true, '(789) 012-3456'),
    ('Buena Vista Deli & Grocery', '152 Knickerbocker Ave', 'Brooklyn', 'NY', 11237, 'store2.jpg', '9:00 AM - 9:00 PM', true, '(555) 123-4567'),
    ('EUROPE', '307 Brighton Beach Ave', 'Brooklyn', 'NY', 11235, 'store8.jpg', '8:00 AM - 8:00 PM', true, '(222) 999-7777'),
    ('Atlantis', '1127 Flushing Ave', 'Brooklyn', 'NY', 11237, 'store4.jpg', '10:00 AM - 8:00 PM', true, '(246) 135-7900'),
    ('Valery Deli Grocery Store', '214 Knickerbocker Ave', 'Brooklyn', 'NY', 11237, 'store7.jpg', '7:30 AM - 9:30 PM', true, '(888) 555-1212'),
    ('Clasico Grocery', '343 Knickerbocker Ave', 'Brooklyn', 'NY', 11237, 'store9.jpg', '9:00 AM - 7:00 PM', true, '(444) 777-3333'),
    ('To The World Farm', '655 Grand St #4854', 'Brooklyn', 'NY', 11211, 'store10.jpg', '10:30 AM - 6:30 PM', false, '(777) 111-3333'),
    ('Williams Avenue Community Garden', '88 Williams Ave', 'Brooklyn', 'NY', 11207, 'store6.jpg', '6:00 AM - 12:00 AM', false, '(321) 654-9870');

INSERT INTO product (store_id, product_name, product_image, product_description, product_category, product_weight, product_price, product_discount, product_unit, product_brand, product_allergens, product_special_diet, product_health_label, product_is_fresh, product_is_frozen, product_is_halal, product_is_kosher, product_is_non_processed, product_is_organic, product_is_vegetarian, product_is_stock, product_is_vegan, product_is_seafood)
VALUES
    (1, 'Apples', 'apple.jpg', 'Fresh, juicy apples', 'Fruits', 0.5, 1.99, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Bananas', 'banana.jpg', 'Sweet, ripe bananas', 'Fruits', 0.3, 0.49, 0, 'lb', 'Tropical Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Crispy Chips', 'chips.jpg', 'Delicious potato chips', 'Snacks', 0.2, 2.99, 0, 'bag', 'Tasty Treats', 'None', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (4, 'Oranges', 'orange.jpg', 'Fresh, tangy oranges', 'Fruits', 0.4, 0.79, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (6, 'Grapes', 'grapes.jpg', 'Juicy red grapes', 'Fruits', 0.6, 2.49, 0, 'lb', 'Vineyard Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Potato Chips', 'potato_chips.jpg', 'Classic potato chips', 'Snacks', 0.15, 1.49, 0, 'bag', 'SnackWorld', 'None', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (2, 'Strawberries', 'strawberries.jpg', 'Fresh, sweet strawberries', 'Fruits', 0.3, 3.99, 0, 'lb', 'Berry Bliss', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (5, 'Milk', 'milk.jpg', 'Fresh whole milk', 'Dairy', 1, 2.29, 0, 'gallon', 'DairyDelight', 'None', 'None', 'None', true, true, false, false, true, true, false, true, false, false),
    (1, 'Cereal', 'cereal.jpg', 'Nutty cereal flakes', 'Breakfast', 0.8, 3.99, 0, 'box', 'BreakfastBites', 'None', 'None', 'None', false, false, true, false, true, true, true, true, false, false),
    (9, 'Bread', 'bread.jpg', 'Fresh whole wheat bread', 'Bakery', 1, 2.99, 0, 'loaf', 'BakeryBest', 'None', 'None', 'None', true, false, true, true, true, true, true, true, false, false),
    (10, 'Carrots', 'carrots.jpg', 'Crunchy, fresh carrots', 'Vegetables', 0.4, 0.89, 0, 'lb', 'Harvest Farms', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (7, 'Eggs', 'eggs.jpg', 'Farm-fresh eggs', 'Dairy', 0.75, 1.99, 0, 'dozen', 'FarmFresheggs', 'None', 'None', 'None', true, true, false, false, true, true, false, true, false, false),
    (8, 'Juice', 'juice.jpg', 'Refreshing fruit juice', 'Beverages', 1, 3.49, 0, 'bottle', 'JuiceFusion', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Oranges', 'orange.jpg', 'Fresh, tangy oranges', 'Fruits', 0.4, 0.79, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (5, 'Tuna', 'tuna.jpg', 'Wild-caught tuna fillet', 'Seafood', 0.3, 6.99, 0, 'lb', 'OceanCatch', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (3, 'Potato Chips', 'potato_chips.jpg', 'Classic potato chips', 'Snacks', 0.15, 1.49, 0, 'bag', 'SnackWorld', 'Contains soy', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (1, 'Strawberries', 'strawberries.jpg', 'Fresh, sweet strawberries', 'Fruits', 0.3, 3.99, 0, 'lb', 'Berry Bliss', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (4, 'Salmon', 'salmon.jpg', 'Wild-caught salmon fillet', 'Seafood', 0.5, 9.99, 0, 'lb', 'SeaHarvest', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (6, 'Carrots', 'carrots.jpg', 'Crunchy, fresh carrots', 'Vegetables', 0.4, 0.89, 0, 'lb', 'Harvest Farms', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Apples', 'apple.jpg', 'Fresh, juicy apples', 'Fruits', 0.5, 1.99, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Shrimp', 'shrimp.jpg', 'Wild-caught shrimp', 'Seafood', 0.2, 12.99, 0, 'lb', 'SeaTreasures', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (5, 'Almonds', 'almonds.jpg', 'Crunchy roasted almonds', 'Nuts', 0.25, 4.49, 0, 'lb', 'NuttyBites', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (4, 'Pasta', 'pasta.jpg', 'Classic pasta noodles', 'Pasta', 1, 1.29, 0, 'box', 'CarbCraze', 'Contains wheat', 'None', 'None', false, false, true, true, true, true, true, true, false, false),
    (1, 'Kiwi', 'kiwi.jpg', 'Fresh, tangy kiwi', 'Fruits', 0.2, 0.89, 0, 'each', 'Tropical Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (6, 'Lobster', 'lobster.jpg', 'Fresh lobster tail', 'Seafood', 0.3, 19.99, 0, 'lb', 'SeaLuxury', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (2, 'Yogurt', 'yogurt.jpg', 'Creamy yogurt', 'Dairy', 0.5, 2.49, 0, 'cup', 'DairyDelight', 'None', 'None', 'None', true, true, false, false,false, false, true, true, true, false);
    
INSERT INTO review (product_id, review_rating, review_comment, review_timestamp)
VALUES
    (1, 4.5, 'Great quality apples', '2023-08-23 10:00:00'),
    (2, 3.8, 'Good bananas', '2023-08-23 12:30:00'),
    (3, 5.0, 'Oily chips!', '2023-08-23 14:45:00'),
    (4, 4.2, 'Really enjoyed these oranges', '2023-08-23 15:30:00'),
    (6, 4.8, 'Delicious and sweet grapes', '2023-08-23 18:00:00'),
    (3, 3.5, 'Average potato chips', '2023-08-24 10:15:00'),
    (2, 4.0, 'Fresh and tasty strawberries', '2023-08-24 13:45:00'),
    (5, 3.7, 'Milk was slightly sour', '2023-08-25 09:30:00');
