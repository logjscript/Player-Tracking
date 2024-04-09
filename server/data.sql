CREATE TABLE roster (
    id VARCHAR,
    team VARCHAR,
    position VARCHAR,
    fullName VARCHAR
);

INSERT INTO roster (id, team, position, fullName)
SELECT (data->>'id')::VARCHAR,
       (data->>'team')::VARCHAR,
       (data->>'position')::VARCHAR,
       (data->>'fullName')::VARCHAR
FROM temp;

