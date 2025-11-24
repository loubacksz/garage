A character set is a set of symbols and encodings. A collation is a set of rules for comparing characters in a character set. Let's make the distinction clear with an example of an imaginary character set.
Suppose that we have an alphabet with four letters: 'A', 'B', 'a', 'b'. We give each letter a number: 'A' = 0, 'B' = 1, 'a' = 2, 'b' = 3. The letter 'A' is a symbol, the number 0 is the encoding for 'A', and the combination of all four letters and their encodings is a character set.

Now, suppose that we want to compare two string values, 'A' and 'B'. The simplest way to do this is to look at the encodings: 0 for 'A' and 1 for 'B'. Because 0 is less than 1, we say 'A' is less than 'B'. Now, what we've just done is apply a collation to our character set. The collation is a set of rules (only one rule in this case): "compare the encodings." We call this simplest of all possible collations a binary collation.

But what if we want to say that the lowercase and uppercase letters are equivalent? Then we would have at least two rules: (1) treat the lowercase letters 'a' and 'b' as equivalent to 'A' and 'B'; (2) then compare the encodings. We call this a case-insensitive collation. It's a little more complex than a binary collation.

In real life, most character sets have many characters: not just 'A' and 'B' but whole alphabets, sometimes multiple alphabets or eastern writing systems with thousands of characters, along with many special symbols and punctuation marks. Also in real life, most collations have many rules: not just case insensitivity but also accent insensitivity (an "accent" is a mark attached to a character as in German 'ö') and multiple-character mappings (such as the rule that 'ö' = 'OE' in one of the two German collations).

What I need to understand is whether mysql's collation(set of rules for comparing characters) is set to be case-insensitive - SHOW CHARACTER SET;
    SELECT DEFAULT_CHARACTER_SET_NAME, DEFAULT_COLLATION_NAME
    FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'locallibrary';

What is the meaning of the MySQL collation utf8mb4_0900_ai_ci?
utf8mb4 means that each character is stored as a maximum of 4 bytes in the UTF-8 encoding scheme.
0900 refers to the Unicode Collation Algorithm version. (The Unicode Collation Algorithm is the method used to compare two Unicode strings that conforms to the requirements of the Unicode Standard).
ai refers accent insensitivity. That is, there is no difference between e, è, é, ê and ë when sorting.
ci refers to case insensitivity. This is, there is no difference between p and P when sorting.

Um charset, ou conjunto de caracteres, é uma tabela que mapeia caracteres a números, permitindo que computadores os interpretem e exibam corretamente

Some conversions occur implicitly. For example, MySQL automatically converts strings to numbers as necessary, and vice versa.