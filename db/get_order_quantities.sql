SELECT
 name,
 SUM (quantity) as QUANTITY
FROM
 history
GROUP BY
 name
ORDER BY quantity DESC
LIMIT 10

