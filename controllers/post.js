exports.getPosts = (req, res)=>{
    res.json({
        Posts:[
            {title:"First Post"},
            {title:"Second Post"},
            {title:"Third Post"}

        ]
    });
}