CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(300),
    price INTEGER,
    category VARCHAR(40)
)

CREATE TABLE cart (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER,
    item_total DECIMAL
)

------

CREATE TABLE cart (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER
)

CREATE TABLE orders (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER
    -- item_total DECIMAL,
)

ALTER TABLE orders
ADD COLUMN item_total DECIMAL

INSERT INTO orders
SELECT * FROM cart

INSERT INTO cart
(name, price, quantity)
VALUES
('stuff', 5.0, 3)