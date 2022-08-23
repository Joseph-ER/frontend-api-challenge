class Api{
  constructor(){}

  fetchPeeps(callback){
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then((response)=> response.json())
    .then((data)=>{
      callback(data);
    })
  }

  findUser(id, handle){
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  }

  newPeep(body, timePosted){
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps",{
      method: 'POST',
      'content-type': 'application/json',
      body: JSON.stringify(body)
    })
    .then((response)=> {
      response.json();
      console.log(response);
    })
    .then((data)=> {
      console.log('success:', data);
    })
  }
}

module.exports = Api;