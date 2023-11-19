# 증강 (Augment) 파싱 순서 [아이템도 마찬가지]

1. Data Dragon 에서 해당 시즌에 맞는 증강 파일을 다운 받는다. (언어는 아무 언어나 상관없음.)
2. 위 파일에서 id (= apiName) 목록을 뽑아낸다.
3. 해당 apiName 목록을 통해 CDragon json 파일에서 해당 apiName 에 맞는 증강 정보들을 뽑아내 ts 파일로 만든다.

언어별 분기 되는 프로퍼티는 BARNCHES 상수에 정의되어 있다.


# 챔피언, 특성 파싱 순서

1. 챔피언, 특성은 cDragon 의 json 파일만 가지고 생성 할 수 있다.
