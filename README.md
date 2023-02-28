## TodoList Web Application (with json-server)
Reactjs와 json-server를 이용한 CRUD 테스트
- 회원가입
- 아이디/비밀번호 찾기
- TodoList

## 실행 방법
1. 파일이 패키지와 분리되어 있어 다음 명령을 통해 패키지를 다운받아야합니다.
```
npm install
```

2. 프론트 서버를 열어줍니다.
```
npm run start
```

3. 프론트 서버와의 통신을 위해 json-server를 열어줍니다.
```
npx json-server json-server/db.json --port 4000
```

**※ 통신 주소는 포트를 4000으로 하드코딩 하였기 때문에, 4000번 포트로 서버를 열어주시기 바랍니다.**



**※ 회원가입**
```
아이디 - 영문자와 숫자를 포함한 4자이상의 글자
비밀번호 - 소문자, 대문자, 숫자, 특수기호 각각 최소 하나이상을 포함한 8자이상의 글자
이름 - 특수문자를 제외한 2자이상의 글자
```



## 실행 화면
<img src="https://user-images.githubusercontent.com/44726494/220847000-c857900a-23f8-4acc-8017-e1f72d2d7594.png" width="972px" />

## 참고 자료
색상조합: https://www.colorhunt.co/
