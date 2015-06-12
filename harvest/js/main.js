var topbarList,astrList,toggleType,fundtype,fundtypeI,fundTypeLi,assetList,assetListBg,inviaTab,hqlTypeA,hqlConA;


function toggeType(obj){
	if(fundtype.style.display=='none'){
		toggleType.style.display = 'none';
		assetListBg.style.display = fundtype.style.display = 'block';
		fundtypeI.style.visibility = 'visible';
	}else{
		toggleType.style.display = 'block';
		assetListBg.style.display = fundtype.style.display = 'none';
		fundtypeI.style.visibility = 'hidden';
	}
}

function productType(obj){
	for(var i=0;i<fundTypeLi.length;i++){
		fundTypeLi[i].className = '';
	}
	obj.className = 'active';
	toggleType.innerHTML = fundtypeI.innerHTML = obj.innerHTML;
	fundtypeI.style.visibility = 'hidden';
	toggleType.style.display = 'block';
	fundtype.style.display = assetListBg.style.display = 'none';
}

(function(){

	window.addEventListener('load',function(){
	 	topbarList = document.querySelectorAll('.topBar a');
		astrList = document.querySelectorAll('.astrList');
		toggleType = document.querySelector('.myAssetDetails b');
		fundtype = document.querySelector('.fundtype');
		fundtypeI = document.querySelector('.myAssetDetails i');
		fundTypeLi = document.querySelectorAll('.fundtype li');
		assetList = document.querySelector('.assetList');
		assetListBg = document.querySelector('.assetListBg');
		ainviaTab = document.querySelectorAll('.inviaTab a');
		Invia = document.querySelectorAll('.Invia');

		hqlTypeA = document.querySelectorAll('.hqlType li');
		hqlConA = document.querySelectorAll('.hqlCon');
		

		if(assetListBg)assetListBg.style.height = assetList.offsetHeight+20+'px';
			

		function tab(parentNode,childNode){

			for(var i=0;i<parentNode.length;i++){
				parentNode[i].index = i;
				parentNode[i].addEventListener('click',function(ev){

					ev.preventDefault();
					for(var i=0;i<parentNode.length;i++){
						parentNode[i].className = '';
						childNode[i].style.display = 'none';
					}
					this.className = 'active';
					childNode[this.index].style.display = 'block';
					if(topbarList[0].className != 'active'){
						document.querySelector('body').style.paddingTop = 50+'px';
					}else{
						document.querySelector('body').style.paddingTop = 130+'px';
					}
					return false;
				}, false);
			}

		}

		tab(topbarList,astrList);

		tab(ainviaTab,Invia);

		tab(hqlTypeA,hqlConA);




		var queries = {};
	    if (window.location.search.length > 0) {
	        var parts = window.location.search.substr(1).split('&');
	        for (var i = 0; i < parts.length; i++) {
	            var singleParts = parts[i].split('=');
	            queries[singleParts[0]] = decodeURIComponent(singleParts[1]);
	        }
	    }
	    var mode = queries["mode"];
	    if(mode == '23123'){
	    	document.querySelectorAll('.topBar a')[1].click();
	    }

	    if(mode == 'history'){
	    	document.querySelectorAll('.topBar a')[1].click();
	    	document.querySelectorAll('.inviaTab a')[1].click();
	    }
	});
})()






