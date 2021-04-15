-- 모든 레코드 조회
-- https://programmers.co.kr/learn/courses/30/lessons/59034
SELECT * FROM ANIMAL_INS;

-- 역순 조회
-- https://programmers.co.kr/learn/courses/30/lessons/59035
-- https://www.w3schools.com/sql/sql_orderby.asp
SELECT NAME, DATETIME 
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC;

-- 아픈 동물 찾기
-- https://programmers.co.kr/learn/courses/30/lessons/59036
-- https://www.w3schools.com/sql/sql_where.asp
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS 
WHERE INTAKE_CONDITION = "Sick"
ORDER BY ANIMAL_ID ASC;

-- 어린 동물 찾기
-- https://programmers.co.kr/learn/courses/30/lessons/59037
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != "Aged"
ORDER BY ANIMAL_ID ASC;

-- 동물 아이디와 이름
-- https://programmers.co.kr/learn/courses/30/lessons/59403
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC;

-- 여러 기준으로 정렬하기
-- https://programmers.co.kr/learn/courses/30/lessons/59404
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC;

-- 상위 n개 레코드
-- https://programmers.co.kr/learn/courses/30/lessons/59405
-- https://www.w3schools.com/sql/sql_top.asp
SELECT NAME 
FROM ANIMAL_INS
ORDER BY DATETIME ASC
LIMIT 1;

