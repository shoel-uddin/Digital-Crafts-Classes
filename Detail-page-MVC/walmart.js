const db = {
    163601874 : {
        title: "SAMSUNG Galaxy Watch - Bluetooth Smart Watch (46mm) - Silver - SM-R800NZSAXAR",
        rating: '4 stars',
        mainImage: 'img1.jpg',
        images: [
            'img2.jpg',
            'img3.jpg',
            '...etc.'
        ],
        addon: {
            none :'none',
            Three : '3 Years - $19.96'
        }

    }
}

applicationCache.get('/:id', (req,res)=>{
    const id = req.params.id
    const product = db[id]
    res.render('product-details', {
        locals: {
            title: product.title,
            rating : product.rating,

        }
    })
})