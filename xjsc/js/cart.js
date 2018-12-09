$(function() {
	var goods = data.goods;
	for(var i = 0; i < goods.length; i++) {
		$('<div class="cart-list" title='
		+goods[i].id+
		'><div class="cart-hd"><input type="checkbox" name="" id="" value="" /><em>'
		+goods[i].title+
		'</em></div><div class="cart-items"><dl><dt><img src='
		+goods[i].imgUrl+
		'/></dt><dd>名称：C#编程基础</dd><dd>编著：武汉格莱科技有限公司</dd><dd>出版：中国地质大学出版社</dd><dd>简介：当你第一次见到C#时，千万不要傻傻地将它读作“C井号”...</dd><dd >定价：￥<span class="price">'
		+goods[i].price+
		'</span></dd></dl><div class="icon-del del-item"><a href="#"></a></div></div><div class="subtotal"><span class="total-price">小计：<em>'
		+goods[i].price+
		'</em></span><span class="count"><a href="#" class="icon-minus minus"></a><input type="number" name="" id="num" value="1" /><a href="#" class="icon-add add"></a></span></div></div>').appendTo(".container")
	}
	$(".add").click(function() {
		var countN = $(this).siblings("input");
		var val0 = parseInt(countN.val());
		var valN = val0 + 1;
		countN.val(valN);
		var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
		var subprice = price * valN;
		$(this).parent().prev().children("em").text(subprice);
		add();
		return false;
	})

	$(".minus").click(function() {
		var countN = $(this).siblings("input");
		var val0 = parseInt(countN.val());
		var valN = val0 - 1;
		countN.val(valN);
		var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
		var subprice = price * valN;
		$(this).parent().prev().children("em").text(subprice);
		add();
		return false;
	})

	$(".del-item a").click(function() {
		var boo = confirm("确定删除吗？");
		if(boo) {
			$(this).parents(".cart-list").remove();
			add();
			return false;
		}
	})

	$("#allCheck").click(function() {
		$(".container input:checkbox").prop("checked", this.checked);
		add();
	})

	function isAll() {
		var allL = $(".container input:checkbox").length;
		var cheL = $(".container input:checked").length;
		if(allL == cheL) {
			$("#allCheck").prop("checked", true);
		} else {
			$("#allCheck").prop("checked", false);
		}
		add();
	}
	isAll();
	$(".container input:checkbox").click(isAll);

	function add() {
		var allTotle = 0;
		$(".container input:checked").each(function(index) {
			var a = $(".container input:checked").eq(index);
			var aN = parseInt(a.parent().siblings(".subtotal").children(".total-price").children("em").text());
			console.log(aN);
			allTotle = allTotle + aN;
		})
		$("#totaprice").text(allTotle)
	}
})