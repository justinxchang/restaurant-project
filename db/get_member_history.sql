SELECT m.member_name, m.member_email, m.points, h.name, h.order_num, h.price, h.quantity
From member m
JOIN history h on h.member_id = m.member_id
WHERE m.member_id = $1
ORDER by h.order_num