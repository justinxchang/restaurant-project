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
    id serial PRIMARY KEY,
    order_num integer,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER,    
    item_total DECIMAL
);

UPDATE cart
SET item_total = price*quantity;

CREATE TABLE orders (
    id serial PRIMARY KEY,
    order_num integer,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER,
    item_total DECIMAL
);

UPDATE orders
SET item_total = price*quantity


ALTER TABLE orders
ADD COLUMN item_total DECIMAL

INSERT INTO orders
SELECT * FROM cart

INSERT INTO cart
(name, price, quantity)
VALUES
('stuff', 5.0, 3)

DELETE FROM cart

DROP TABLE cart