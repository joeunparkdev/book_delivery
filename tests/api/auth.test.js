import request from 'supertest';
import {app} from '../../src/app.js';

describe('Authentication Integration Tests', () => {
  let accessToken = '';

  // 회원가입 테스트
  it('should signup a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        "username":"조조",
        "password": "000000",
        "confirmPassword": "000000",
        "email": "jo@naver.com"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('사용자를 생성하였습니다.');
  });

  // 로그인 테스트
  it('should signin an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/signin')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('로그인에 성공했습니다.');
    
    // 로그인 후 발급된 토큰을 저장
    accessToken = response.body.accessToken;
    console.log(accessToken);
  });
  
// 로그아웃 테스트
it('should signout a user', async () => {
  // 로그아웃 요청
  const logoutResponse = await request(app)
    .post('/api/auth/signout')
    .set('Authorization', `Bearer ${accessToken}`); 
  
  console.log(accessToken);

  // 기대한대로 로그아웃이 성공했는지 확인
  expect(logoutResponse.statusCode).toBe(204);
  expect(logoutResponse.body.message).toBe('정상적으로 로그아웃 되었습니다.');

  // 로그아웃 후에는 토큰이 더 이상 유효하지 않아야 함
  const invalidTokenResponse = await request(app)
    .post('/api/auth/signout')
    .set('Authorization', `Bearer ${accessToken}`);

  // 유효하지 않은 토큰에 대한 응답이 기대한대로 401 상태 코드인지 확인
  expect(invalidTokenResponse.statusCode).toBe(401);
  expect(invalidTokenResponse.body.message).toBe('Unauthorized');
});

});
