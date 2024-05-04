
    function getproduct(){
      axios.get('http://localhost:3000/goods')
    .then(res => {
       console.log(res.data)
       for (const el of res.data) {
         $('.goodsContainer ').append(`
         <div class = "goodsCard">
            <div class = "goodsDetail">
              <h3>${el.title}</h3>
              <h3>$${el.price} <button>+</button></h3>

            </div>
         </div>`)
        
       }
    })

    }

    getproduct()
    