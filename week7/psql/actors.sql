-- Delete if exists
DROP TABLE IF EXISTS actors;

-- Create the actors table
CREATE TABLE actors (
    id SERIAL primary key,
    Name VARCHAR(100) NOT NULL,
    Age INT,
    "Number of Oscars" INT
);

-- Insert values to the actors table
INSERT INTO actors (Name, Age, "Number of Oscars")
VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, Age, "Number of Oscars")
VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, Age, "Number of Oscars")
VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, Age, "Number of Oscars")
VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, Age, "Number of Oscars")
VALUES ('John Cho', 43, 0);

-- Query for special cases
SELECT Name FROM actors WHERE "Number of Oscars" > 1;
SELECT Name FROM actors WHERE Age > 30;