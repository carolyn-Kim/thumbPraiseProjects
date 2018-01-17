class PraiseButton{
    constructor(num,ele){
        this.num=num;
        this.ele=ele;
    }

    clickFn(){
        this.ele.click(()=>{
            if(this.num<10){
                this.ele.parent().css('-webkit-filter', 'grayscale(0)');
                $('#counter').css('display','inline-block');
                setTimeout(()=>{
                    $('#counter').css('display', 'none');
                },200);
                this.num=add(this.num);
            }else{
                this.ele.parent().css('-webkit-filter', 'grayscale(1)');
                this.num=0
            }
            console.log(this.num);
        })
    }
}

class Thumb extends PraiseButton{
    constructor(num,ele){
        super(num,ele);
    }
}
export {Thumb};
/* let res = new Thumb(0, $('#hand'));
res.clickFn(); */
