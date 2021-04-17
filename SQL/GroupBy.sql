-- 고양이와 개는 몇 마리 있을까
-- https://programmers.co.kr/learn/courses/30/lessons/59040
-- https://www.w3schools.com/sql/sql_groupby.asp
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) AS count
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE ASC;

-- 동명 동물 수 찾기
-- https://programmers.co.kr/learn/courses/30/lessons/59041
-- https://www.w3schools.com/sql/sql_having.asp
-- https://www.w3resource.com/sql/aggregate-functions/count-having.php
-- 🔑HAVING (not WHERE) with COUNT, GROUP BY
SELECT NAME, COUNT(NAME) AS COUNT
FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT >= 2
ORDER BY NAME ASC;

-- 입양 시각 구하기(1)
-- https://programmers.co.kr/learn/courses/30/lessons/59412
-- https://www.w3schools.com/sqL/func_mysql_hour.asp
SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR >= 9 AND HOUR <= 19
ORDER BY HOUR ASC;

-- 입양 시각 구하기(2)
-- https://programmers.co.kr/learn/courses/30/lessons/59413
-- 🔑주어진 시간대(0~23) 입양 기록이 0(NULL)이어도 COUNT 0으로 출력

-- 사용자 정의 변수
-- http://www.mysqlkorea.com/sub.html?mcode=manual&scode=01&m_no=21582&cat1=9&cat2=292&cat3=0&lang=k
-- 대입 연산자
-- http://tcpschool.com/mysql/mysql_operator_assignment
SET @hour := -1;
SELECT 
    (@hour := @hour + 1) AS HOUR,
    (SELECT COUNT(*) 
     FROM ANIMAL_OUTS 
     WHERE HOUR(DATETIME) = @hour) AS COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23;

-- UNION
-- https://www.w3schools.com/sqL/sql_union.asp
SELECT TEMP.HOUR, IFNULL(OUTS.COUNT, 0) AS COUNT
FROM (
SELECT 0 AS HOUR UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12 UNION SELECT 13 UNION SELECT 14 UNION SELECT 15 UNION SELECT 16 UNION SELECT 17 UNION SELECT 18 UNION SELECT 19 UNION SELECT 20 UNION SELECT 21 UNION SELECT 22 UNION SELECT 23) TEMP
LEFT JOIN (
    SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT
    FROM ANIMAL_OUTS
    GROUP BY HOUR
  ) AS OUTS ON TEMP.HOUR = OUTS.HOUR;



