fetch("http://localhost:3000/api/cameras")
.then( importList => importList.json())
.then( listProduct => console.log(listProduct))

