-- 최댓값 구하기
-- https://programmers.co.kr/learn/courses/30/lessons/59415
-- https://www.w3schools.com/sql/sql_min_max.asp
SELECT MAX(DATETIME) AS 시간
FROM ANIMAL_INS;

-- 최솟값 구하기
-- https://programmers.co.kr/learn/courses/30/lessons/59038
SELECT MIN(DATETIME) AS 시간
FROM ANIMAL_INS;

-- 동물 수 구하기
-- https://programmers.co.kr/learn/courses/30/lessons/59406
-- https://www.w3schools.com/sql/sql_count_avg_sum.asp
SELECT COUNT(ANIMAL_ID) AS count
FROM ANIMAL_INS;


-- 중복 제거하기
-- https://programmers.co.kr/learn/courses/30/lessons/59408
-- https://www.w3schools.com/sql/sql_distinct.asp
SELECT COUNT(DISTINCT NAME) AS count
FROM ANIMAL_INS
WHERE NAME IS NOT NULL;