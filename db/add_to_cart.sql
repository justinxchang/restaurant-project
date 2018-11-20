INSERT INTO cart
(order_num, name, price, type, quantity)
VALUES
($1, $2, $3, $4, 1);

SELECT * FROM cart
 