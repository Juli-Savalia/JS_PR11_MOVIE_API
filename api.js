$.ajax({
    type: "GET",
    url: "https://dummyjson.com/carts",
    success: function (res) {
        let tbl = "";
        let carts = res.carts;
        console.log(carts);
        carts.map((val) => {
            let cartsproduct = val.products;

            cartsproduct.map((items)=>{
                tbl += `
                    <tr>
                        <td>
                        <img src="${items.thumbnail}" class="card-img-top" alt="..." width:50%>
                        </td>
                        <td>${items.title}</td>
                        <td>${items.total}</td>
                        <td>${items.discountedTotal}</td>
                    </tr>
                `
                 })
                        
            
        })
        document.getElementById('data').innerHTML = tbl;
    }
})
