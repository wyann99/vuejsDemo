new Vue({
	el: "#app",
	data: {
		productList: [],
		checkAllFlag: false,
		totalMoney: 0,
		delFlag: false,
		curProduct: ''
	},
	filters: {
		formatMoney: function(value){
			return "￥" + value.toFixed(2);
		}
	},
	mounted: function(){
		this.$nextTick(function(){
			this.cartView();
		})
	},
	methods: {
		//渲染页面
		cartView:function(){
			var _this = this;
			_this.$http.get("data/cartData.json").then(function(res){
				_this.productList = res.data.result.list;
			});
		},
		// 通过+、-改变商品数量从而改变总额
		changeMoney:function(product, way){
			if(way > 0){
				product.productQuantity ++;
			}else{
				product.productQuantity --;
				if(product.productQuantity<1){
					product.productQuantity = 1;
				}
			}
			this.calcTotalPrice();

		},
		// 判断是否先中了按钮
		selectPro: function(item){
			if(typeof item.checked == 'undefined'){ //判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
				// 全局注册
				// Vue.set(item, "checked", true);
				//局部注册
				this.$set(item, "checked", true);
			}else{
				item.checked = !item.checked;
			}
			this.calcTotalPrice();

		},
		//全选与取消全选，点击全选是flag为true，取消时为false
		checkAll: function(flag){
			this.checkAllFlag = flag;
			var _this = this;
			this.productList.forEach(function(item, index){
				if(typeof item.checked == 'undefined'){ //防止未定义
					_this.$set(item, "checked", _this.checkAllFlag);//通过set来给item添加属性checked
				}else{
					item.checked = _this.checkAllFlag;
				}
			});

			this.calcTotalPrice();
		},
		//计算总金额
		calcTotalPrice: function(){
			var _this = this;
			this.totalMoney = 0;
			this.productList.forEach(function(item, index){
				if(item.checked){
					_this.totalMoney += item.productPrice * item.productQuantity;
				}
			});
		},
		//确定删除
		delConfirm: function(item){
			this.delFlag = true;
			this.curProduct = item;
		},
		delProduct: function(){
			var index = this.productList.indexOf(this.curProduct);
			this.productList.splice(index, 1);
			this.delFlag = false;
		}

	}
})

Vue.filter("money", function(value, type){
	return "￥" + value.toFixed(2)+type;
})

