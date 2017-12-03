
const URL = 'https://api.dribbble.com/v1/';
const TOKEN_ACESS = 'Bearer de7ad5bf2041c7d8576df126aba3bbf044f4b10ce7bc97267b4b8a087c12f3a7';
let HEADER_AUTHORIZATION = {
    'Authorization': TOKEN_ACESS
}

class DribbbleApi {
   getShots(params) {
    return this.$http.get( URL + 'shots', {
      headers: HEADER_AUTHORIZATION,
      params: params
    }).then(response =>{
      return response;
    })
  }
}

export const dribbbleApi = new DribbbleApi()
