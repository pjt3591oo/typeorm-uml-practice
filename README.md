# typeorm uml sample

ormconfig.json의 설정 정보를 수정하여 사용하는 예제입니다.

synchronize를 true로 설정하면 npm run시 entity에 정의된대로 테이블 생성

UML은 entity를 기반으로 추출하기 때문에 굳이 테이블이 필요하지 않습니다.

```
$ npm i

$ npm run start

$ npm run db:diagram
```