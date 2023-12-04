# MALL-MIDDLEWARE

# 프로젝트 소개
- RDB(MySQL) 데이터 모델링, JWT, Express Middleware를 이용한 **인증 로직** 추가

# API 테스트 방법
먼저 app.js를 실행해주세요.
```
      node app.js
```
app.js 실행중 새로운 터미널을 열어주시고 아래 명령어를 입력해주세요.
```
      cd tests/api
      node authTest.js 
      node userTest.js
      node productTest.js
```

# 기술 스택
1. **API 명세서를 작성**하여, ****최종적 결과물****을 미리 파악합니다.
2. **MySQL, Sequelize를** 이용해 데이터베이스를 설계하고 활용합니다.
    - 데이터 모델링을 통해 **ERD 작성**
    - Sequelize를 이용한 **마이그레이션 코드 및 스키마 코드 작성**
    - **JOIN**을 통해 다른 Table의 데이터와 결합
3. **인증 관련 기능을 구현**합니다.
    - **JWT**(AccessToken)의 이해
    - 회원가입 API, 로그인 API, 내 정보 조회 API, 인증 **Middleware** 구현
    - 상품 관련 기능에 인증 로직 추가
4. AWS EC2 와 Gabia를 사용한 배포 IP 주소: http://apploadbalancer-381603911.ap-northeast-2.elb.amazonaws.com/
   
# 주요 기능
### **회원가입 API**

1. 이메일, 비밀번호, 비밀번호 확인, 이름을 데이터로 넘겨서 **회원가입을 요청**합니다.
    - 보안을 위해 비밀번호는 평문(Plain Text)으로 저장하지 않고 Hash 된 값을 저장합니다.
2. 아래 사항에 대한 **유효성 체크**를 해야 되며, 유효하지 않은 경우 알맞은 Http Status Code와 에러 메세지를 반환해야 합니다.
    - **이메일**: 중복될 수 없으며, 이메일 형식에 맞아야 합니다.
    - **비밀번호:** 최소 6자 이상이며, 비밀번호 확인과 일치해야 합니다.
3. **회원가입 성공 시**, 비밀번호를 제외 한 사용자의 정보를 반환합니다.

### **로그인 API**

1. 이메일, 비밀번호로 **로그인을 요청**합니다.
2. 이메일 또는 비밀번호 중 **하나라도 일치하지 않는다면,** 알맞은 Http Status Code와 에러 메세지를 반환해야 합니다.
3. **로그인 성공 시**, JWT AccessToken을 생성하여 반환합니다.
    - Access Token
        - Payload: userId를 담고 있습니다.
        - 유효기한: 12시간

### 인증 Middleware

1. Request Header의 Authorization 정보에서 JWT를 가져와서, 인증 된 사용자인지 확인하는 Middleware를 구현합니다.
2. 인증에 실패하는 경우에는 알맞은 Http Status Code와 에러 메세지를 반환 해야 합니다.
    - Authorization에 담겨 있는 값의 형태가 표준(Authorization: Bearer <JWT Value>)과 일치하지 않는 경우
    - JWT의 유효기한이 지난 경우
    - JWT 검증(JWT Secret 불일치, 데이터 조작으로 인한 Signature 불일치 등)에 실패한 경우
3. 인증에 성공하는 경우에는 req.locals.user에 인증 된 사용자 정보를 담고, 다음 동작을 진행합니다.

### 사용자 관련 ###
1. 내 정보 조회 API (인증 필요 - 인증 Middleware 사용)
    - 인증에 성공했다면, **비밀번호를 제외한 내 정보**를 반환합니다.

### 상품 관련 ###
- 인증 필요 API 호출 시 **Request Header**의 ****Authorization**** 값으로 **JWT**를 함께 넘겨줘야 합니다.
- 인증에 실패한 경우, 알맞은 **Http Status Code**와 **로그인이 필요합니다** 라는 에러 메세지를 반환합니다.

### 인증 기능 추가

- 인증 필요 API 호출 시 **Request Header**의 ****Authorization**** 값으로 **JWT**를 함께 넘겨줘야 합니다.
- 인증에 실패한 경우, 알맞은 **Http Status Code**와 **로그인이 필요합니다** 라는 에러 메세지를 반환합니다.

### 상품 생성 API (인증 필요 - 인증 Middleware 사용)

- API 호출 시 상품명, 작성 내용, ~~작성자명, 비밀번호~~를 전달 받습니다.
→ 작성자명, 비밀번호 대신 인증에 성공한 사용자의 userId를 저장합니다.
- 상품은 두 가지 상태, 판매 중(`FOR_SALE`)및 판매 완료(`SOLD_OUT`) 를 가질 수 있습니다.
- 상품 등록 시 기본 상태는 판매 중(`FOR_SALE`) 입니다.

### 상품 수정 API (인증 필요 - 인증 Middleware 사용)

- 상품명, 작성 내용, 상품 상태, ~~비밀번호~~를 데이터로 넘겨 상품 수정을 요청합니다.
→ 인증 기능으로 인해 비밀번호는 필요가 없습니다.
- 수정할 상품과 ~~비밀번호 일치 여부를 확인~~한 후, 동일할 때에만 글이 수정되어야 합니다.
→ 인증에 성공한 사용자의 userId와 상품을 등록한 사용자의 userId가 일치할 때에만 **수정**되어야 합니다.
- 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지를 반환합니다.

### 상품 삭제 API (인증 필요 - 인증 Middleware 사용)

- ~~비밀번호~~를 데이터로 넘겨 상품 삭제를 요청합니다.
→ 인증 기능으로 인해 비밀번호는 필요가 없습니다.
- 수정할 상품과 ~~비밀번호 일치 여부를 확인~~한 후, 동일할 때만 글이 삭제되어야 합니다.
→ 인증에 성공한 사용자의 userId와 상품을 등록한 사용자의 userId가 일치할 때에만 **삭제**되어야 합니다.
- 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지를 반환합니다.

### 상품 목록 조회 API

- 상품 ID, 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회하기
    - 상품 ID, 작성 내용 항목이 지난 과제에 실수로 빠져있었습니다.
    - 작성자명을 표시하기 위해서는 상품, 사용자 Table의 JOIN이 필요합니다.
- 상품 목록은 작성 날짜를 기준으로 ~~**내림차순(최신순)** 정렬하기~~
    - QueryString으로 sort 항목을 받아서 정렬 방식을 결정합니다.
    - 들어올 수 있는 값은 ASC, DESC 두가지 값으로 대소문자 구분을 하지 않습니다.
    - ASC는 과거순, DESC는 최신순 그리고 둘 다 해당하지 않거나 값이 없는 경우에는 최신순 정렬을 합니다.

### 상품 상세 조회 API

- 상품 ID, 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회하기
    - 상품 ID 항목이 지난 과제에 실수로 빠져있었습니다.
    - 작성자명을 표시하기 위해서는 상품, 사용자 Table의 JOIN이 필요합니다.    

# 환경변수 (.env) 
- DB_HOST=
- DB_USER=
- DB_PASSWORD=
- DB_DATABASE=
- DB_DIALECT=
- JWT_SECRET=

# API 명세서 URL

- https://docs.google.com/spreadsheets/d/16ou3REvbLL4OqWi5ADrPBlHaQloZMLV2qSzsZr1kjV0/edit#gid=0

# ERD URL

- https://www.erdcloud.com/d/bqkE8XLxX7guv6vB9

# 더 고민해 보기

1. Class와 Instance가 각각 무엇인지 설명해 주세요.
2. Class의 Method는 화살표 함수(Arrow Function) 형태로 구현하지 않았을 때 발생할 수 있는 문제와 해당 문제를 해결할 수 있는 다른 방법을 적어주세요. (**Hint**: `this bind`)
3. 3-Layered Architecture의 장점과 단점을 아는대로 적어주세요.
4. 숙련주차 과제에서 Mongoose를 Sequelize로 교체 했을 때와 비교하여 이번 과제에서 Sequelize를 Prisma로 교체하는 작업은 더 쉬웠나요? 더 어려웠나요? 왜 그런지 3-Layered Architecture를 기반으로 설명해 주세요.
5. 테스트코드 작성의 장점과 단점을 아는대로 적어주세요.
6. 테스트의 종류 3가지와 각각이 무엇인지 간단히 설명해 주세요.