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
    (1, 'Apples', 'https://thumbs.dreamstime.com/b/red-apple-isolated-white-background-45573196.jpg', 'Fresh, juicy apples', 'Fruits', 0.5, 1.99, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Bananas', 'https://img.freepik.com/premium-photo/bunch-bananas-isolated-white-background-ripe-bananas-clipping-path-quality-macro-photo-your-project_517510-2967.jpg?w=2000', 'Sweet, ripe bananas', 'Fruits', 0.3, 0.49, 0, 'lb', 'Tropical Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Crispy Chips', 'https://media.istockphoto.com/id/458678045/photo/lays-potato-chips.jpg?s=612x612&w=0&k=20&c=vm2Gy6O7wr7PTIkdIntIiBZVUJiisHwyxcK6hYbrNT8=', 'Delicious potato chips', 'Snacks', 0.2, 2.99, 0, 'bag', 'Tasty Treats', 'None', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (4, 'Oranges', 'https://media.istockphoto.com/id/182463420/photo/tangerine-duo-with-leafs.jpg?s=612x612&w=0&k=20&c=d3JZRAqgqZ5RWyN4ryFteCnmFNbeD9e3TNJkS2IC0vU=', 'Fresh, tangy oranges', 'Fruits', 0.4, 0.79, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (6, 'Grapes', 'https://img.freepik.com/premium-photo/grapes-white-background_181303-4423.jpg', 'Juicy red grapes', 'Fruits', 0.6, 2.49, 0, 'lb', 'Vineyard Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Potato Chips', 'https://www.seekpng.com/png/detail/761-7619514_doritos-nacho-cheese-doritos-bag-transparent-background.png', 'Classic potato chips', 'Snacks', 0.15, 1.49, 0, 'bag', 'SnackWorld', 'None', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (2, 'Strawberries', 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX3444441.jpg', 'Fresh, sweet strawberries', 'Fruits', 0.3, 3.99, 0, 'lb', 'Berry Bliss', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (5, 'Milk', 'https://www.pngitem.com/pimgs/m/111-1112579_milk-gallon-png-milk-carton-transparent-background-png.png', 'Fresh whole milk', 'Dairy', 1, 2.29, 0, 'gallon', 'DairyDelight', 'None', 'None', 'None', true, true, false, false, true, true, false, true, false, false),
    (1, 'Cereal', 'https://target.scene7.com/is/image/Target/GUEST_9b329235-1ff4-4ab2-af07-99f8828df528?wid=488&hei=488&fmt=pjpeg', 'Nutty cereal flakes', 'Breakfast', 0.8, 3.99, 0, 'box', 'BreakfastBites', 'None', 'None', 'None', false, false, true, false, true, true, true, true, false, false),
    (9, 'Bread', 'https://thumbs.dreamstime.com/b/lot-different-bread-white-background-isolated-95772001.jpg', 'Fresh whole wheat bread', 'Bakery', 1, 2.99, 0, 'loaf', 'BakeryBest', 'None', 'None', 'None', true, false, true, true, true, true, true, true, false, false),
    (10, 'Carrots', 'https://t4.ftcdn.net/jpg/00/80/96/17/360_F_80961739_hep1UZaQRsy5WQOYU3jkOr5CB7A6xc3U.jpg', 'Crunchy, fresh carrots', 'Vegetables', 0.4, 0.89, 0, 'lb', 'Harvest Farms', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (7, 'Eggs', 'https://media.istockphoto.com/id/467061077/photo/eggs-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=K6RZK8UR5hzHy4auNEKHV0EdkBVnVlyLlfBflpUXP-g=', 'Farm-fresh eggs', 'Dairy', 0.75, 1.99, 0, 'dozen', 'FarmFresheggs', 'None', 'None', 'None', true, true, false, false, true, true, false, true, false, false),
    (8, 'Juice', 'https://media.istockphoto.com/id/171114622/photo/glass-of-orange-juice-and-three-oranges-over-white-backdrop.jpg?s=612x612&w=0&k=20&c=R9tzhhF-wYAYm7FoVzabI1iCs9_jMopXM38j6P9HhP8=', 'Refreshing fruit juice', 'Beverages', 1, 3.49, 0, 'bottle', 'JuiceFusion', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Oranges', 'https://media.istockphoto.com/id/182463420/photo/tangerine-duo-with-leafs.jpg?s=612x612&w=0&k=20&c=d3JZRAqgqZ5RWyN4ryFteCnmFNbeD9e3TNJkS2IC0vU=', 'Fresh, tangy oranges', 'Fruits', 0.4, 0.79, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (5, 'Tuna', 'https://media.istockphoto.com/id/466869031/photo/bumble-bee-tuna-can.jpg?s=612x612&w=0&k=20&c=I8YJhBEdVOJuYQ1xsBCydubTt42gDEnTxoYTwG0bPHc=', 'Wild-caught tuna fillet', 'Seafood', 0.3, 6.99, 0, 'lb', 'OceanCatch', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (3, 'Potato Chips', 'https://meaningfuleats.com/wp-content/uploads/2023/03/takis-gluten-free.jpg', 'Classic potato chips', 'Snacks', 0.15, 1.49, 0, 'bag', 'SnackWorld', 'Contains soy', 'None', 'None', false, false, true, false, true, false, false, true, true, false),
    (1, 'Strawberries', 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX3444441.jpg', 'Fresh, sweet strawberries', 'Fruits', 0.3, 3.99, 0, 'lb', 'Berry Bliss', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (4, 'Salmon', 'https://media.istockphoto.com/id/1176250147/photo/raw-salmon-piece-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UhFaL4j7Lmabiti4WEN3xsBVvzRdcwMt0R6bimPROUk=', 'Wild-caught salmon fillet', 'Seafood', 0.5, 9.99, 0, 'lb', 'SeaHarvest', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (6, 'Carrots', 'https://t4.ftcdn.net/jpg/00/80/96/17/360_F_80961739_hep1UZaQRsy5WQOYU3jkOr5CB7A6xc3U.jpg', 'Crunchy, fresh carrots', 'Vegetables', 0.4, 0.89, 0, 'lb', 'Harvest Farms', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (2, 'Apples', 'https://static.vecteezy.com/system/resources/previews/002/078/428/large_2x/green-apple-on-white-background-free-photo.jpg', 'Fresh, juicy apples', 'Fruits', 0.5, 1.99, 0, 'lb', 'NatureFresh', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (3, 'Shrimp', 'https://target.scene7.com/is/image/Target/GUEST_f56f9150-5f58-48e2-bfc9-f6b6a2bc126a?wid=488&hei=488&fmt=pjpeg', 'Wild-caught shrimp', 'Seafood', 0.2, 12.99, 0, 'lb', 'SeaTreasures', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (5, 'Almonds', 'https://live.staticflickr.com/65535/48177230762_2ba98c0a55_b.jpg', 'Crunchy roasted almonds', 'Nuts', 0.25, 4.49, 0, 'lb', 'NuttyBites', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (4, 'Pasta', 'https://thumbs.dreamstime.com/b/chisinau-moldova-marth-front-view-barilla-spaghetti-n-italian-pasta-white-background-company-was-founded-as-bakery-shop-112696602.jpg', 'Classic pasta noodles', 'Pasta', 1, 1.29, 0, 'box', 'CarbCraze', 'Contains wheat', 'None', 'None', false, false, true, true, true, true, true, true, false, false),
    (1, 'Kiwi', 'https://img.freepik.com/premium-photo/kiwi-fruit-isolated-white-background_42033-482.jpg?w=2000', 'Fresh, tangy kiwi', 'Fruits', 0.2, 0.89, 0, 'each', 'Tropical Delights', 'None', 'None', 'None', true, false, false, false, true, true, true, true, false, false),
    (6, 'Lobster', 'https://img.freepik.com/premium-photo/red-lobster-isolated-white-background-full-depth-field_88281-5805.jpg?w=2000', 'Fresh lobster tail', 'Seafood', 0.3, 19.99, 0, 'lb', 'SeaLuxury', 'None', 'None', 'None', false, true, true, false, true, true, false, true, false, true),
    (2, 'Yogurt', 'https://media.istockphoto.com/id/840644316/photo/yogurt-with-raspberries-and-blueberries-over-white.jpg?s=612x612&w=0&k=20&c=pmlLz6RDiv4Hemyq-dRJXR7qeExEE3IdQxAZCtX5Ogk=', 'Creamy yogurt', 'Dairy', 0.5, 2.49, 0, 'cup', 'DairyDelight', 'None', 'None', 'None', true, true, false, false,false, false, true, true, true, false);

INSERT INTO shopper (shopper_firebase_uid, shopper_email, shopper_first_name, shopper_last_name, shopper_profile_pic, shopper_instagram_link, shopper_facebook_link, shopper_dietary_preferences)
VALUES
    ('StSYbI8Gw1c2cm2oV2IDFn4WwAI2', 'tempuser1@example.com', 'Temp', 'User 1', 'profile1.jpg', 'https://www.instagram.com/tempuser1/', 'https://www.facebook.com/tempuser1/', ARRAY['Vegetarian', 'Gluten-Free']),
    ('XtXYbI7Gw1c2cm2oV2IDFn5SsBJ3', 'tempuser2@example.com', 'Temp', 'User 2', 'profile2.jpg', 'https://www.instagram.com/tempuser2/', 'https://www.facebook.com/tempuser2/', ARRAY['Vegan', 'Keto']);

INSERT INTO review (shopper_firebase_uid, store_id, review_rating, review_comment, review_timestamp)
VALUES
    ('StSYbI8Gw1c2cm2oV2IDFn4WwAI2', 1, 4, 'Great store!', '2023-08-23 10:00:00'),
    ('XtXYbI7Gw1c2cm2oV2IDFn5SsBJ3', 2, 2, 'Not a good store.', '2023-08-23 12:30:00'),
    ('StSYbI8Gw1c2cm2oV2IDFn4WwAI2', 3, 5, 'Excellent products.', '2023-08-23 14:45:00'),
    ('XtXYbI7Gw1c2cm2oV2IDFn5SsBJ3', 4, 4, 'Nice place.', '2023-08-23 15:30:00'),
    ('StSYbI8Gw1c2cm2oV2IDFn4WwAI2', 5, 4, 'Loved the selection.', '2023-08-23 18:00:00'),
    ('XtXYbI7Gw1c2cm2oV2IDFn5SsBJ3', 6, 3, 'Average experience.', '2023-08-24 10:15:00'),
    ('StSYbI8Gw1c2cm2oV2IDFn4WwAI2', 7, 4, 'Friendly staff.', '2023-08-24 13:45:00'),
    ('XtXYbI7Gw1c2cm2oV2IDFn5SsBJ3', 8, 1, 'Could be better.', '2023-08-25 09:30:00');