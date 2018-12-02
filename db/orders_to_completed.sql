DELETE FROM orders
WHERE id = $1;

SELECT * FROM orders
ORDER BY id;  