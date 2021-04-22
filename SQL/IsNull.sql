-- 이름이 없는 동물의 아이디
-- https://programmers.co.kr/learn/courses/30/lessons/59039
-- https://www.w3schools.com/sqL/sql_null_values.asp
SELECT ANIMAL_ID 
FROM ANIMAL_INS
WHERE NAME IS NULL;

-- 이름이 있는 동물의 아이디
-- https://programmers.co.kr/learn/courses/30/lessons/59407
SELECT ANIMAL_ID 
FROM ANIMAL_INS
WHERE NAME IS NOT NULL;

-- NULL 처리하기
-- https://programmers.co.kr/learn/courses/30/lessons/59410
-- https://www.w3schools.com/sqL/sql_isnull.asp
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name") AS NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;