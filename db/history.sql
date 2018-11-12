CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(300),
    price INTEGER,
    category VARCHAR(40)
)

CREATE TABLE cart (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    quantity INTEGER
)