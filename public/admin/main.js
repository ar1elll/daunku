$('#addGoods').click(()=>{
    let data = {
        title: $('#title').val(),
        price: $('#price').val()
    }

    axios.post('http://localhost:3000/add-goods', data)
    .then(res =>{
        console.log(res)
    })
})



function getGoods() {
    axios.get('http://localhost:3000/goods')
        .then(res => {
            for (let el of res.data) {
                $('.goodsList').append(`<div class='goodsItemRow'>
                    <h3>${el.title}</h3>
                    <div>${el.price}</div>
                    <button class='deleteBtn' id='${el._id}'>Delete</button>
                </div>`);
            }

            $('.deleteBtn').click(e =>{
                console.log(e.target.id)

                axios.delete(`http://localhost:3000/goods/${e.target.id}`)
                    .then(res =>{
                        location.reload()
                    })
            })

        })
}
getGoods();

$('#subscribe').click(()=>{
let data = {
    email: $('#email').val

}
axios.post('http://localhost:3000/send-mail')
    .then(res=>{
        alert('user saves')
        $('#email').val()
    })
})