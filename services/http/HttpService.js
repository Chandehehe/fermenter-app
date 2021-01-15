// import axios from 'axios';
// import qs from 'qs';
// import store from 'react-native-simple-store';
// import { API, STORAGE } from '../../constant';

// let instance = null;

// class HttpService {
//   constructor() {
//     if (instance) {
//       return instance;
//     }

//     instance = this;

//     const http = axios.create({
//       baseURL: API.baseURL,
//       // timeout: 1000,
//       headers: {
//         // Accept: API.acceptHeader,
//         // 'Access-Control-Allow-Headers': 'x-access-token',
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': '',
//       }
//     });

//     // setup interceptor for http request
//     http.interceptors.request.use(this.handleRequestInterceptor);

//     // setup interceptor for http response
//     http.interceptors.response.use(
//       // success response
//       response => response,
//       // error response
//       this.handleResponseInterceptor
//     );

//     this.http = http;
//     this.inFlightAuthRequest = null;
//   }

//   // Request interceptor to add auth bearer token to request header
//   handleRequestInterceptor = request => {
//     const requestURL = request.url;
//     const queryParam = requestURL.substr(requestURL.indexOf('?'));
//     const cleanUrl = requestURL.replace(queryParam, '');
//     const subUrl = cleanUrl.substr(cleanUrl.indexOf('/api'));

//     // apply only if the request is need an access token
//     if (
//       API.endPointsNoAccessTokenReq.indexOf(subUrl.replace('/api', '')) === -1
//     ) {
//       return store.get(STORAGE.accessTokenKey).then(resp => {
//         const accessToken = resp;

//         if (accessToken && accessToken !== '') {
//           request.headers['Authorization'] = `Bearer ${accessToken}`;
//         }

//         return request;
//       });
//     }

//     return request;
//   };

//   // Response interceptor to manage token refresh
//   handleResponseInterceptor = error => Promise.reject(error.response);

//   // Perform a get http call
//   get(url) {
//     const config = {
//       method: 'get',
//       baseURL: API.baseURL,
//       url,
//       responseType: 'json'
//     };
//     return (
//       this.http
//         .request(config)
//         // .get(path)
//         .then(response => this.handleSuccessResponse(response))
//         .catch(error => this.handleFailResponse(error))
//     );
//   }

//   // Perform a post http call
//   post(url, payload) {
//     return this.http
//       .request({
//         method: 'POST',
//         baseURL: API.baseURL,
//         url,
//         responseType: 'json',
//         data: payload
//       })
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   // Perform a patch http call
//   patch(url, payload) {
//     return this.http
//       .request({
//         method: 'PATCH',
//         baseURL: API.baseURL,
//         url,
//         responseType: 'json',
//         data: payload
//       })
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   // Perform a delete http call
//   delete(url) {
//     return this.http
//       .request({
//         method: 'DELETE',
//         baseURL: API.baseURL,
//         url,
//         responseType: 'json'
//       })
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   // Perform a custom http call
//   custom(baseURL, method, url, payload) {
//     let config = {
//       method,
//       baseURL,
//       url,
//       responseType: 'json'
//     };

//     if (payload) {
//       config = { ...config, data: payload };
//     }

//     return this.http
//       .request(config)
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   // Perform a put http call
//   put(url, payload) {
//     return this.http
//       .request({
//         method: 'PUT',
//         baseURL: API.baseURL,
//         url,
//         responseType: 'json',
//         data: payload
//       })
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   // Perform a post http call for AZURE
//   azurePost(url, payload) {
//     const config = {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     }

//     return this.http
//       .request({
//         method: 'POST',
//         baseURL: API.azureURL,
//         url,
//         responseType: 'json',
//         data: qs.stringify(payload),
//       }, config)
//       .then(response => this.handleSuccessResponse(response))
//       .catch(error => this.handleFailResponse(error));
//   }

//   handleSuccessResponse = response => response.data;

//   handleFailResponse = error => {
//     if (error && error.data) {
//       return error.data;
//     }

//     Promise.reject(error);
//   };
// }

// export default new HttpService();
