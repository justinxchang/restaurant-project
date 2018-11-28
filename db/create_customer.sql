INSERT INTO customer
(cust_email, cust_hash, cust_name, points, admin)
VALUES
($1, $2, $3, 0, false)

Returning *;