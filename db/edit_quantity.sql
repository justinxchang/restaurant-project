UPDATE cart
SET quantity = $2
WHERE id = $1;

-- RETURNING *;

SELECT * FROM cart
ORDER BY id;  