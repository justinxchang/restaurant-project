INSERT INTO member
(member_email, member_hash, member_name, points, admin)
VALUES
($1, $2, $3, 0, false)

Returning *;