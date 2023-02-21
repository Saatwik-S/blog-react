import axios, { AxiosError } from 'axios'
import { BASE_URL, type REQUEST_DATA } from '../../constants'

export const makeRequest = async (config: REQUEST_DATA): Promise<any> => {
  try {
    const { data } = await axios({ baseURL: BASE_URL, ...config })
    return data
  } 
  catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message ?? 'Something went wrong')
    } else if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}
