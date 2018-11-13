INSERT INTO orders
SELECT * FROM cart;

UPDATE cart
SET item_total = price*quantity;

DELETE FROM cart;

