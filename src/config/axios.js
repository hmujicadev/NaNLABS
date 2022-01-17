/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/prefer-default-export */
import instance from 'axios'

const axios = instance.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log('interceptors', config)
//     return config
//   },
//   function (error) {
//     console.log('req err', error)
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    const errorResponse = error.response

    // return {
    //   ok: false,
    //   code: error.code,
    //   message: error.message
    // }
    // // Any status codes that falls outside the range of 2xx cause this function to trigger
    // // Do something with response error
    // return Promise.reject(error)
    return errorResponse || error
  }
)
export default axios