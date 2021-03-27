# momeet-server

회의록 작성하는 프로젝트의 서버.
주로 토이 프로젝트로 활용하며, 기능을 이것저것 덧붙이면서 tdd 활용할 예정

블로그: https://www.notion.so/functions-ea4d27fc1ac941098ef56d35f0ef4405

## 자주 쓰는 명령어

```
npm run server
npm test

# package install comman
npm install --save [package]
```

## environment settings

nodejs -v : 12.19.0
npm -v : 6.14.8

참고: https://velog.io/@loakick/AWS-EC2-Ubuntu-18.04%EC%97%90-NodeJS-Github-Mysql-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

express : 4.17.1

참고: https://expressjs.com/en/starter/installing.html

nodemon: 2.0.4

명령어: `sudo npm i -g nodemon`
참고: https://www.npmjs.com/package/nodemon?activeTab=readme
비고: nodemon은 node의 대체 wrapper임.

dotenv:
명령어: `npm i --save-dev dotenv`
참고: https://www.youtube.com/watch?v=fgTGADljAeg

## Issues

개발 진행

1. basic

-   get, post
-   issues 리스트로 추가할 수 있게 하기

2. connect with DB

-   table 작성하기

3. 소켓으로 실시간 확인
4. 어드민 주기, 회원가입 로그인 등
5. 프론트엔드(웹)

## nodejs main 명령어

```
npm init
# 새로운 프로젝트나 명령어를 만들 때 사용

npm install 패키지@버전

npm install 패키지 --save-dev
# package.json에서 devDependencies에 패키지 이름을 올릴 수 있음.

npm install 주소
# 깃허브 주소에 있는 패키지 다운받을 수 있음.

npm ls
# 다운받은 패키지 조회

```

목표: package.json 만 있으면 명령어 하나로 dependent한 패키지 다운 받는 방법 찾기
https://docs.npmjs.com/files/package.json

dotenv 관련 설명
https://velog.io/@public_danuel/process-env-on-node-js
