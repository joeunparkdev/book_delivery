import request from 'supertest';
import {app} from '../../src/app.js';

describe('Product API', () => {
  // 상품 생성 후 ID 저장
  let productId;

  // 상품 생성 API 테스트
  it('should create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product.',
        price: 10000,
      });

    expect(response.status).toBe(200);
    expect(response.body.productId).toBeTruthy();
    productId = response.body.productId;  // 생성된 상품의 ID 저장
  });

  // 상품 수정 API 테스트
  it('should update a product', async () => {
    const response = await request(app)
      .put(`/products/${productId}`)
      .send({
        name: 'Updated Test Product',
        price: 15000,
      });

    expect(response.status).toBe(200);
    expect(response.body.productId).toBe(productId);
  });

  // 상품 삭제 API 테스트
  it('should delete a product', async () => {
    const response = await request(app)
      .delete(`/products/${productId}`)

    expect(response.status).toBe(200);
    expect(response.body.productId).toBe(productId);
  });
});
