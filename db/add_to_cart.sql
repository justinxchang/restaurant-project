
INSERT INTO cart
(order_num, name, price, type, quantity, member_id)
VALUES
($1, $2, $3, $4, 1, $5);

SELECT * FROM cart
  