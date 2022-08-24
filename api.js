class Api{
  constructor(){}

  fetchPeeps(callback){
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then((response)=> response.json())
    .then((data)=>{
      callback(data);
    })
  }

  createUser(username, password){
    fetch("https://chitter-backend-api-v2.herokuapp.com/users",{
    method: 'POST',
    'Content-Type': 'application/json',
      user: 
      {handle: JSON.stringify(username), password: JSON.stringify(password)}
    })
    .then((response)=> {
      response.json();
      console.log(response);
    })
    .then((data)=> {
      console.log('success:', data);
    })
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