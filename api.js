$.ajax({
    type: "GET",
    url: "https://dummyjson.com/carts",
    success: function (res) {
        let tbl = "";
        let carts = res.carts;
        console.log(carts);
        carts.map((val) => {
        
                tbl += `
                       <div class = "d-flex flex-wrap">
                            <div class="card w-100 py-3" style="width: 18rem;">
                                <div class = "d-flex">
                        `
                 let cartsproduct = val.products;

                 cartsproduct.map((items)=>{
                    tbl+=  `
                                    <div class="col-20 d- row">
                                    <img src="${items.thumbnail}" class="card-img-top" alt="..." width:50%>
                                    <div class="card-body">
                                        <h5 class="card-title">${items.title}</h5>
                                        <p class="card-text">${val.total}</p>
                                        <p class="card-text">${val.discountedTotal}</p>
                                        <a href="#" class="btn btn-primary">Add To Cart</a>
                                    </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                         `
                 })
                        
            
        })
        document.getElementById('data').innerHTML = tbl;
    }
})
