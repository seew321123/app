window.onload=function(){
	var product = document.getElementById("tab1");
	var introduce = document.getElementById("tab2");
	var position = document.getElementById("tab3");
	product.onclick=function(){
		document.getElementById("product").style.display="none";
		document.getElementById("introduce").style.display="none";
		document.getElementById("position").style.display="none";
		document.getElementById("product").style.display="block";
	};
	
	introduce.onclick=function(){
		document.getElementById("product").style.display="none";
		document.getElementById("introduce").style.display="none";
		document.getElementById("position").style.display="none";
		document.getElementById("introduce").style.display="block";
	};
	
	position.onclick=function(){
		document.getElementById("product").style.display="none";
		document.getElementById("introduce").style.display="none";
		document.getElementById("position").style.display="none";
		document.getElementById("position").style.display="block";
	};

    document.getElementById("money").onclick=function(){
    	document.getElementById("pay").style.display="block";
    };
    
    document.getElementById("stopPay").onclick=function(){
    	document.getElementById("pay").style.display="none";
    };

	new Vue({
                el:'#container',
                data:{ //vue的属性、数据
                    t1:'',
//以下这一段数据是用于循环的产品信息，目前共有13项
// 序号              修改人               修改日期                             操作
//  1        Jerry H     17/March/27th       第一次建立data
//  2        Jerry H     17/March/27th       将具体的信息填充至页面内

                    msgData:
                   [
                    {title:"SN65型室内栓",
                    url:"img/s1.png",
                    information:"本产品与供水管网接通，出口装有接扣，能迅速与水带连接",
                    longWord:"室内消火栓安装于建筑物的明显位置的消防橱柜内，和水带水枪配套使用。遇有火警，迅速将水带接在消火栓上，另一头接上水枪，然后旋开消火栓，即可以扑灭火势。安装中，拧紧力不得施加在阀盖部位的六方上，以免因安装不当造成产品损伤。"
                    },

                    {title:"消防软管卷盘25M",
                    url:"img/sd1.png",
                    information:"天广消防自救式消防软管卷盘 25米 消防水管水带厂家正品",
                    longWord:"消防软管卷盘，一般安装在室内消火栓箱内，以水为灭火剂，用于扑救A类，如纸质、棉麻等物质引起的初期火灾，适用于商场、宾馆、高层建筑等公共场所。具有灭火展开速度快，性能可靠的特点。软管采用桔红色（PVC+橡胶）阻燃材料制造，具有阻燃、抗老化、耐酸碱，且质轻柔软、色泽鲜艳、爆破压力高、卷伸性能好等众多优点。"
                    },
                    
                    {title:"PVC消防水带",
                    url:"img/sd2.png",
                    information:"天广50-8型PVC加衬里消防水带25米耐磨高压消防水带不含接扣",
                    longWord:"本公司有衬里消防水带采用国内先进的生产设备进行制造，具有优越的耐磨性，在船舶、石化、水利绿化等领域，也广泛应用。由编织层和橡塑衬里层组成。编织层采用高强度合成纤维组成。柔软、轻便、流通阻力小、经济适用。"
                    },
                    
                    {title:"KN65螺旋接扣",
                    url:"img/sd3.png",
                    information:"天广消防 KN65螺旋接扣 消防水带与室内消火栓接口 单个出售",
                    longWord:"水带接扣用于水带、消防车、消火栓、水栓之间的连接，以便输送水或泡沫混合液进行灭火。本品为内螺纹固定接扣，由本体、密封圈座、橡胶密封圈和挡圈等零部件组成。密封圈座上有沟槽，用来扎水带。"
                    },
                    
                    {title:"铜制水枪",
                    url:"img/sd4.png",
                    information:"天广消防 铜制水枪 自救式消防软管水枪接头 洗车水枪",
                    longWord:"本消防喷头用于消防软管卷盘洒水喷枪，带半旋转式开关功能，出水大小易于调节，可用于消防场所灭火，同时适用于冲刷地板、洗车浇灌花草之用。喷头用于连接软管，对内部进行增压喷射从而灭火，接口处有反向沟槽，扎上橡胶软管后即可使用。"
                    },
                    
                    {title:"消防软管卷盘20M",
                    url:"img/sd5.png",
                    information:"天广消防自救式消防软管卷盘 20米 消防水管水带厂家正品",
                    longWord:"消防软管卷盘，一般安装在室内消火栓箱内，以水为灭火剂，用于扑救A类，如纸质、棉麻等物质引起的初期火灾，适用于商场、宾馆、高层建筑等公共场所。具有灭火展开速度快，性能可靠的特点。软管采用桔红色（PVC+橡胶）阻燃材料制造，具有阻燃、抗老化、耐酸碱，且质轻柔软、色泽鲜艳、爆破压力高、卷伸性能好等众多优点。"
                    },
                    
                    {title:"65-8型PVC消防水带25M",
                    url:"img/sd6.png",
                    information:"天广65-8型PVC加衬里消防水带25米耐磨高压消防水带 不含接扣",
                    longWord:"本公司有衬里消防水带采用国内先进的生产设备进行制造，具有优越的耐磨性，在船舶、石化、水利绿化等领域，也广泛应用。由编织层和橡塑衬里层组成。编织层采用高强度合成纤维组成。柔软、轻便、流通阻力小、经济适用。"
                    },
                    
                    {title:"高压直流水枪",
                    url:"img/sd7.png",
                    information:"天广消防 消防水带高压直流水枪 QZ19 DN65厂家正品",
                    longWord:"消防直流水枪是将水带内的水流转换为柱状高速射流；达到快速扑灭火灾的目的。消防直流水枪主要适用宾馆、高层建筑、公共设施、仓库、码头扑灭A类火灾。超级合金、真材实料、耐久能抗。"},
                    
                    {title:"耐磨消防水带20M",
                    url:"img/sd8.png",
                    information:"天广PVC有衬里消防水带65-8型 20米高压耐磨消防水带 不含接扣",
                    longWord:"本公司有衬里消防水带采用国内先进的生产设备进行制造，具有优越的耐磨性，在船舶、石化、水利绿化等领域，也广泛应用。由编织层和橡塑衬里层组成。编织层采用高强度合成纤维组成。柔软、轻便、流通阻力小、经济适用。"
                    },
                    
                    {title:"50-8型PVC消防水带20M",
                    url:"img/sd9.png",
                    information:"天广PVC加衬里消防水带50-8型 20米高压耐磨消防水带 不含接扣",
                    longWord:"本公司有衬里消防水带采用国内先进的生产设备进行制造，具有优越的耐磨性，在船舶、石化、水利绿化等领域，也广泛应用。由编织层和橡塑衬里层组成。编织层采用高强度合成纤维组成。柔软、轻便、流通阻力小、经济适用。"
                    },
                    
                    {title:"KD65型水带接扣",
                    url:"img/sd10.png",
                    information:"天广消防接扣消防水带接扣管牙接扣内扣式接口 KD65厂家正品",
                    longWord:"水带接扣用于水带、消防车、消火栓、水栓之间的连接，以便输送水或泡沫混合液进行灭火。本品为内螺纹固定接扣，由本体、密封圈座、橡胶密封圈和挡圈等零部件组成。密封圈座上有沟槽，用来扎水带。"
                    },
                    
                    {title:"KD65型水带接扣",
                    url:"img/sd11.png",
                    information:"天广消防接扣KD50管牙接扣消防水带接扣内扣式接扣",
                    longWord:"水带接扣用于水带、消防车、消火栓、水栓之间的连接，以便输送水或泡沫混合液进行灭火。本品为内螺纹固定接扣，由本体、密封圈座、橡胶密封圈和挡圈等零部件组成。密封圈座上有沟槽，用来扎水带。"
                    },
                    
                    {title:"DN25型黄铜阀门",
                    url:"img/sd12.png",
                    information:"天广消防黄铜阀门DN25消防软管接口黄铜阀门",
                    longWord:"本消防阀门用于连接消防水管以及消防枪头橡胶管，用于开关消防用水或泡沫，旋转即可调节出水大小，可用于家庭、超市、办公室等场所灭火。接扣为内螺旋纹式接口，一头接消防软管，一头接消防水带，即可使用。"
                    },
                    
                    {title:"干粉灭火器ABC",
                    url:"img/mh1.png",
                    information:"天广汽车用车载灭火器 家用厂房用干粉灭火器ABC类1KG2KG4KG",
                    longWord:"灭火器筒内充装的是磷酸铵盐（A、B、C）干粉，以及作为驱动力的氮气。可扑灭固体易燃物（A类）、易燃液体及可融化固体（B类）、易燃气体（C类）、和带电器具的初起火灾。"
                    },
                    
                    {title:"车载灭火器固定带",
                    url:"img/mh2.png",
                    information:"天广消防 车载灭火器固定带不干胶车用魔术贴固定带 适用于绒面",
                    longWord:"灭火器固定带用于将灭火器固定在车的后备箱中，防止灭火器在车后背箱滚动。方便快捷、粘性强。将A带以及B带粘与灭火器两侧，将B带一侧先粘于车的后备箱，最后用两条C带盖在两条A带上同时粘附在后备箱毛绒处。"
                    },
                    
                    {title:"温度感应洒水喷头",
                    url:"img/pl1.png",
                    information:"天广温度感应洒水喷头68度下喷头DN15消防喷头整盒起售（20个）",
                    longWord:"本消防喷淋头安装于房顶消防喷水管网上，洒水形状为抛物状，将大部分水向下喷洒，可用于家庭、办公楼、学校、超市、车站等场所灭火。"
                    },
                    
                    {title:"消防扳手",
                    url:"img/s2.png",
                    information:"天广室外地上消火栓扳手消防 铸铁加厚消防扳手 厂家正品",
                    longWord:"消防扳手常与室外消火栓配套使用，用于快速旋转开室外消火栓的开关从而达到出水灭火的效果，也可以用于维护或其他场景。"
                    },
                    
                   ]           
                },
                methods:{
                	click:function(event){
                		event.currentTarget.lastElementChild.style.display="block";           		
                	},
                	close:function(event){
                		event.currentTarget.parentNode.style.display="none";
                		event.cancelBubble=true;//如果不阻止时间冒泡的话，点击事件传递给父元素以后，这个大图又会出现。
                	}
                }
	});
	
};
