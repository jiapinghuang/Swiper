//匿名函数，防止变量污染
;(function(global){
	//构造函数，使用new使用
	function Swiper(el,option){
		this.speed=option.speed||3000
		this.timer=null
		this.imgs=el
		this.active()
	};
	//原型上提供方法和属性
	Swiper.prototype={		
		constructor:Swiper,
		active:function(){
			var that=this
			//给图片添加zindex来显示				
			let num=0;
	 		let len=imgs.length-1;
	 		let index=1;
 			that.timer=setInterval(function(){					 								
 				if(num>len){num=0}
 				imgs[num].style.zIndex=index++;		
 				num++;
 			}, that.speed);	
		},
		stop:function(){
			var that=this
			clearInterval(that.timer)
			console.log('定时器停止')
		}
	};
	if (typeof module !== 'undefined' && module.exports) { //CommonJs规范 
        module.exports = Swiper;
    }else if (typeof define === 'function'){ //AMD/CMD规范
        define(function () {
            return Swiper
        })
    }else { //global指向this,this在插件外指向window.可以直接使用script标签
        global.Swiper = Swiper;
    }
})(this)
