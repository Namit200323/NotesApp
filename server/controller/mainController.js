exports.homepage = async(req,res)=>{
    const locals = {
        title:'NodeJs Notes'
    };
    res.render('index',{
        locals,
        layout:'../views/layouts/frontpage'
    });
}