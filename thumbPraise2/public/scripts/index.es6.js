class PraiseButton {
    constructor(num, ele) {
        this.num = num;
        this.ele = ele;
    }

    clickFn() {
        let f = this.throttle(this.fundo, 1000);
        this.ele.click(() => {
            f();
        })
    }
    fundo() {
        if (this.num < 10) {
            this.ele.parent().css('-webkit-filter', 'grayscale(0)');
            $('#counter').css('display', 'inline-block');
            setTimeout(() => {
                $('#counter').css('display', 'none');
            }, 1000);
            axios.get('/index/update').then(function (response) {
                console.log(response);
            }).catch(err => {
                console.log(err);
            })
            this.num = add(this.num);
        } else {
            this.ele.parent().css('-webkit-filter', 'grayscale(1)');
            this.num = 0
        }
        console.log(this.num);
    }

    throttle(func, wait) {

        let context=this, args=arguments, results;

        //setTimeout的handler
        let timeout = null;
        //标记时间戳-上一次执行回调的时间戳
        let previous = 0;
        let later = function () {
            previous = 0;
            timeout = null;
            results = func.apply(context, args);
        }

        return function () {
            let now = new Date().getTime();
            if (!previous) {
                previous = now;
            }
            //距离下次触发的等待时间
            let remaining = wait - (now - previous);
            // console.log(remaining);
            if (remaining <= 0 || remaining >= wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }

                previous = now;
                results = func.apply(context, args);
            }
            return results;
        }

    }


}

class Thumb extends PraiseButton {
    constructor(num, ele) {
        super(num, ele);
    }
}
export { Thumb };
/* let res = new Thumb(0, $('#hand'));
res.clickFn(); */
