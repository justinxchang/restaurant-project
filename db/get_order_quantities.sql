SELECT
 name,
 SUM (quantity) as QUANTITY
FROM
 orders
GROUP BY
 name
ORDER BY quantity DESC

