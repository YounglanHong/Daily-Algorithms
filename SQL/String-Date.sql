-- 루시와 엘라 찾기
-- https://programmers.co.kr/learn/courses/30/lessons/59046
-- https://www.w3schools.com/sqL/sql_in.asp
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ("Lucy", "Ella", "Pickle", "Rogan", "Sabrina", "Mitty")
ORDER BY ANIMAL_ID;

-- 이름에 el이 들어가는 동물 찾기
-- https://programmers.co.kr/learn/courses/30/lessons/59047
-- https://www.w3schools.com/sqL/sql_wildcards.asp
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE ANIMAL_TYPE = "Dog" AND NAME LIKE "%EL%" 
ORDER BY NAME;

-- 중성화 여부 파악하기
-- https://programmers.co.kr/learn/courses/30/lessons/59409
SELECT ANIMAL_ID, NAME, 
       IF(SEX_UPON_INTAKE LIKE "Neutered%" 
          OR SEX_UPON_INTAKE LIKE "Spayed%", "O", "X") AS 중성화
FROM ANIMAL_INS;

-- 오랜 기간 보호한 동물 2마리
-- https://programmers.co.kr/learn/courses/30/lessons/59411
-- https://www.w3schools.com/sqL/sql_top.asp
-- https://www.w3schools.com/sqL/func_mysql_datediff.asp
SELECT ANIMAL_OUTS.ANIMAL_ID, ANIMAL_OUTS.NAME
FROM ANIMAL_OUTS
INNER JOIN ANIMAL_INS
ON ANIMAL_OUTS.ANIMAL_ID = ANIMAL_INS.ANIMAL_ID
ORDER BY DATEDIFF(ANIMAL_INS.DATETIME, ANIMAL_OUTS.DATETIME)
LIMIT 2;

-- DATETIME에서 DATE로 형 변환
-- https://programmers.co.kr/learn/courses/30/lessons/59414
-- https://www.w3schools.com/sqL/func_mysql_date_format.asp
SELECT ANIMAL_ID, NAME, 
       DATE_FORMAT(DATETIME, "%Y-%m-%d") AS 날짜
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;