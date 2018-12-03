CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(300),
    price DECIMAL,
    image VARCHAR(500),
    category VARCHAR(40),
    type VARCHAR(20)
)

CREATE TABLE drinks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    ABV DECIMAL,
    origin VARCHAR(40),
    description VARCHAR(5000),
    sub_category VARCHAR(100),
    category VARCHAR(100),
    website VARCHAR(2000),
    logo VARCHAR (1000),
    price DECIMAL,
    type VARCHAR(20)
)

CREATE TABLE cart (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER,
    item_total DECIMAL
)

------

CREATE TABLE orders (
    id serial PRIMARY KEY,
    order_num integer,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER,
    type VARCHAR(20),    
    member_id DECIMAL
);



UPDATE cart
SET item_total = price*quantity;

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

ALTER TABLE food
ADD COLUMN type VARCHAR(10)

UPDATE food
SET type = 'food'


CREATE TABLE member (
    member_id serial primary key,
    member_name VARCHAR(50),
    member_email VARCHAR(180),
    member_hash text,
    points integer DEFAULT 0,
    admin boolean
)

SELECT
 name,
 SUM (quantity) as QUANTITY
FROM
 orders
GROUP BY
 name
ORDER BY quantity DESC

SELECT m.member_name, m.member_email, m.points, h.name, h.order_num, h.price
From member m
JOIN history h on h.member_id = m.member_id
ORDER by h.order_num
