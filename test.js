///задание 1
let arr = [
	{
 name:  "Jonny Walker",
 birthDate:  '1995-12-17 '
	},
	{
 name:  'Andrew',
 birthDate:  '1995-12-17 '
	},
  {
 name:  "Jonny Smith",
 birthdate: "noe"
  }
] 
let searchName =  function( subname, arr){
	return arr.filter(function(object){
  	let {name} =  object;
    if( name.indexOf(subname) !=-1){
    	return true
    }
  })
}
console.log(searchName("Jonny", arr));