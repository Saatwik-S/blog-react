const BASE_URL = 'http://localhost:8080/'
export interface REQUEST_DATA {
  method: string
  url: string
  data?: any
  headers?: any

}

const GET_BLOG_POSTS = (): REQUEST_DATA => {
  return {
    method: 'GET',
    url: 'blog-posts'
  }
}

const UPDATE_POST_DATA = (id: number, data: any): REQUEST_DATA => {
  return {
    method: 'PUT',
    url: `blog-posts/${id}`,
    data
  }
}
export { BASE_URL, GET_BLOG_POSTS, UPDATE_POST_DATA }
