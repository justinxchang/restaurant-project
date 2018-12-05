SELECT m.member_name, m.member_email, m.points, h.name, h.order_num, h.price, h.quantity
From member m
JOIN history h on h.member_id = m.member_id
WHERE m.member_id = $1
ORDER by h.order_num

CREATE TABLE member_history (
    id serial primary key,
    member_id int references member(member_id) not null,
    order_num int references history(order_num) not null
)