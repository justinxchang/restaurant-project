INSERT INTO drinks
(name, description, price, category, sub_category, abv, origin, type)
VALUES
($1, $2, $3, $4, $5, $6, $7, 'drink')

Returning *;