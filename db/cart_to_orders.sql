INSERT INTO orders
SELECT * FROM cart;

DELETE FROM cart;

UPDATE orders
SET order_num = order_num + 1