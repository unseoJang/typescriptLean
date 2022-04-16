interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 2. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 1. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem:Pick<Product, 'id' | 'name' | 'price'>) {}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partail
interface UserProfile {
  userName: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfile {
//   userName?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//   userName?: UserProfile['userName']
//   email?: UserProfile
//   profilePhotoUrl?: UserProfile
// }

// #2 - 축약
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// type UserProfileKeys = keyof UserProfile

// #3 
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
  [p in keyof T]?: T[p]
}

const obj: Partial
