SELECT * FROM book;
SELECT * FROM author;
SELECT title FROM book LIMIT 5;
SELECT title FROM book WHERE title != 'up';
SELECT title FROM book WHERE NOT title = 'up';
SELECT title FROM book WHERE title LIKE '%test%'; # LIKE is case insensitive 
# () - used for condition ordering
# SQL aggregate functions - COUNT AVG MIN MAX SUM
SELECT title FROM book WHERE authorId = (
	SELECT id FROM author
	WHERE author.first_name = 'J.R.R.'
);

# AUTHOR WITHOUT A BOOK DOES NOT APPEAR
SELECT * FROM book
JOIN author ON author.id = book.authorId;

# AUTHOR WITHOUT A BOOK DOES APPEAR EVEN WITHOU A MATCHING RECORD
SELECT book.id, book.title, author.id, author.first_name, author.family_name
FROM book
RIGHT JOIN author ON author.id = book.authorId;

SELECT book.id, book.title, author.id, author.first_name, author.family_name
FROM book
RIGHT JOIN author ON author.id = book.authorId;

# SETS - SQL TOOLS FOR COMPARING AND/OR COMBINING THE RESULT SETS FROM 2 OR MORE SELECT QUERIES


# GROUPS - SLQ KEYWORD THAT ALLOWS ME TO COLAPSE ROWS WITH SAME VALUES - USING A COLUMN AS A REFERENCE
SELECT * FROM titles;
SELECT * FROM employees;

# HERE I COUNT ALL ROWS FROM THE EMPLOYEES TABLE
SELECT COUNT(gender) AS males
FROM employees;

# HERE I COUNT ONLY THE MALE EMPLOYEES
SELECT COUNT(gender) AS males
FROM employees
WHERE gender = "M";

# HERE I COUNT ONLY THE MALE EMPLOYEES
SELECT COUNT(gender) AS males
FROM employees
GROUP BY gender
HAVING gender = "M";