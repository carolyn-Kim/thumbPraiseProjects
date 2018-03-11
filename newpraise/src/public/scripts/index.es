
class PraiseButton {
    constructor() {
    }

    clickFn() {
        axios.get('/index/update').then(function (response) {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }
     
}

class Thumb extends PraiseButton {
    constructor() {
        super();
    }
}
class Star extends PraiseButton{
    constructor(){
        super();
    }
}
export { Thumb, Star};
