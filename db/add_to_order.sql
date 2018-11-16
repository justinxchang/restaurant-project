INSERT INTO cart
(order_num, name, price, quantity)
VALUES
($1, $2, $3, 1);

-- UPDATE cart
-- SET item_total = price*quantity;

SELECT * FROM cart
 