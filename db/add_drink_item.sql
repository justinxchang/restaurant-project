INSERT INTO drinks
(name, abv, origin, description, sub_category, category, website, logo, price, type)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, 6, 'drink')

Returning *;