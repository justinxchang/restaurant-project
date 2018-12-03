UPDATE member
SET points = points - 25000
WHERE member_id = $1;

SELECT * FROM member
WHERE member_id = $1;