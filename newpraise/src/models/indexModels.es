import rp from "request-promise";

const indexModels={
    init(){
        const options={
            uri : 'http://localhost/praiseData/praiseupdate.php',
            method: 'GET'
        };

        return new Promise((resolve,reject)=>{
            rp(options).then((result)=>{
                const res=JSON.parse(result);
                if(res){
                    resolve({success:res.data})
                }else{
                    reject({})
                }
            })
        })
    }
}

export default indexModels;

