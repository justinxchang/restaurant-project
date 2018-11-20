UPDATE cart
SET quantity = $2
WHERE id = $1;

SELECT * FROM cart
ORDER BY #;  