$.ajax({
    url : "https://dummyjson.com/carts",
    type : "GET",
    success : function(res){
        let tbl="";
       res.map((val)=>{
            return (
                tbl += `
                    <tr>
                        <td>${val.id}</td>
                        <td>${val.name}</td>
                        <td>${val.email}</td>
                        <td>${val.body}</td>
                    </tr>
                `
            )
       })
       document.getElementById('data').innerHTML = tbl;
    }
})