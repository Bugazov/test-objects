function correctName(obj){
    if(obj.fathername == undefined ){
        return obj.firstname
    } else{return `${obj.firstname} ${obj.lastname} ${obj.fathername}`}
}
const secondPerson = {
    firstname: 'Akhmad',
    lastname: 'Kuduzow',
    fathername: 'Yakubovich'
  };
  
  console.log(correctName(secondPerson)); 