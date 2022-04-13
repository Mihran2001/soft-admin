import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.0.135:9001",
  // baseURL: "localhost",
});

// [
//   {
//       "_id": "624d7af3605a8b9f9ba9e0ff",
//       "title": "test",
//       "content": "tetesttesttesttesttestst",
//       "category": "ajdgfjkdcategory",
//       "parentCategory": "parent category",
//       "titleTag": "title tag",
//       "metaDescription": "meta description",
//       "url": "https://softconstruct.com/posts/ararat",
//       "image": "https://media.istockphoto.com/photos/view-over-the-city-of-yerevan-capital-of-armenia-with-the-two-peaks-picture-id856585242?s=612x612",
//       "__v": 0
//   }
// ]

// {
//   "email": "xachatryan200104@gmail.com",
//   "id": "62445259d25c4a07483ecfe8",
//   "role": "admin",
//   "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ0NTI1OWQyNWM0YTA3NDgzZWNmZTgiLCJlbWFpbCI6InhhY2hhdHJ5YW4yMDAxMDRAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDg2NTI4NjUsImV4cCI6MjUxMjY1Mjg2NX0.Geb2TjqKA7FMft_mAswP2rZAZATYvS1LO4S0eGNpYCA"
// }
