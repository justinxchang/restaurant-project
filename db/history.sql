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

INSERT INTO cart
(order_num, name, price, quantity
VALUES
(1, 'stuff', 5, 1),
(1, 'random stuff', 6, 2),
(1, 'more stuff', 3, 4)

UPDATE orders
SET item_total = price*quantity

CREATE TABLE orderlist (
    id serial PRIMARY KEY,
    order_num integer,
    order_total decimal
)

SELECT * FROM orderlist
INNER JOIN orderss
ON orderlist.order_num = orderss.order_num

INSERT INTO orderlist
(order_num, order_total)
VALUES 
(1, 34.50)