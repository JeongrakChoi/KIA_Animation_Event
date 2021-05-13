//모바일
function mAction(){
	var winHeight = $(window).height();
	var mTop = winHeight - 940;
	var mPos = mTop/2
	
	$("html").css("height","100%");
	$("body").css({
		height:'100%',
		display:'table',
		background:'#000'	
	});
	$(".wrap").css("margin-top", mPos);
}
//디바이스 체크
$(window).load(function() {
	if(navigator.userAgent.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
	 	mAction();
	}
});


//다음 뎁스 넘어가기
$(function(){
	$(".nextDepth").click(function(){
		$(this).parent("div").hide();
		$(this).parent("div").next("div").show();	
		return false;
	});	
});

//스타트
function startAni(){
	
	setTimeout(function(){
		$(".nocar").fadeOut(2500);
	},1000);
	
	setTimeout(function(){
		$(".tiguan").fadeIn(2500);
	},1000);
	
	setTimeout(function(){
		$(".noDisplay").fadeIn(1000);
	},2500);
	
}

//라운드 1-1
function ani0101(){
	$(".r01 .lt").animate({
		left:'-50%'	
	},2000,'swing');
	
	$(".r01 .rt").animate({
		left:'100%'	
	},2000,'swing');
	
	setTimeout(function(){
		$(".r02 .lt").animate({
		left:'-50%'	
		},2000,'swing');
		
		$(".r02 .rt").animate({
			left:'100%'	
		},2000,'swing');
	},2000);
	
	setTimeout(function(){
		$(".r03 .lt").animate({
		left:'-50%'	
		},2000,'swing');
		
		$(".r03 .rt").animate({
			left:'100%'	
		},2000,'swing');
		
	},4000);
	
	setTimeout(function(){
		$(".round01 .depth02 .overlay").fadeIn(1000);
		$(".round01 .depth02 a.nextDepth").fadeIn(1000);
	},5000);
};


//라운드 2-2
function ani0202(){

	setTimeout(function(){
		$(".lcar01 .car").animate({
			left:'152px',
			bottom:'77px'
		},3000,'easeOutQuad');
		
		$(".lcar01 .unduk").animate({
			left:'-417px',
			bottom:'-256px'
		},3000,'easeOutQuad');
		
		$(".rcar01 .car").animate({
			left:'110px',
			bottom:'60px'
		},4000,'easeOutQuad');
		
		$(".rcar01 .unduk").animate({
			left:'-417px',
			bottom:'-256px'
		},4000,'easeOutQuad');
		
		
	},1000);
	
	setTimeout(function(){
		$(".d01").hide('pulsate',{times:2},1000);
		$(".d02").hide('pulsate',{times:2},1000);
	},5500);
	
	setTimeout(function(){
		$(".seaBg01 img").animate({
			left:'-180px'
		},4000,'easeInOutQuad');
		
		$(".seaBg02 img").animate({
			left:'-180px'
		},4000,'easeInOutQuad');
		
		$(".lcar02 .car").animate({
			left:'130px',
		},4000,'easeInOutQuad');
		
		$(".lcar02 .doro").animate({
			right:'120px'
		},4000,'easeInOutQuad');
		
		$(".rcar02 .car").animate({
			left:'15px',
		},4000,'easeInOutQuad');
		
		$(".rcar02 .doro").animate({
			right:'120px'
		},4000,'easeInOutQuad');

	},6500);
	
	setTimeout(function(){
		$(".d03").hide('pulsate',{times:2},1000);
		$(".d04").hide('pulsate',{times:2},1000);
	},11000);
	
	setTimeout(function(){
		$(".round02 .depth02 .overlay").fadeIn(1000);
		$(".round02 .depth02 .noDisplay").fadeIn(500);
		$(".lose").fadeIn(1000);
	},12000);
		
};

//라운드 3-2
function ani0302(){
	
	//1부터 시작
	setTimeout(function(){
		$(".left .ac1").animate({
			bottom:'0px'
		},1000,'swing');
		
		$(".right .ac1").animate({
			bottom:'0px'
		},1000,'swing');
	},500);
	
	setTimeout(function(){
		$(".left .ac1").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},2000,'swing');
		
		$(".right .ac1").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'75%',
			bottom:'400px'
		},2000,'swing');
	},2000);
	
	//2
	setTimeout(function(){
		$(".left .ac2").animate({
			bottom:'0px'
		},1000,'swing');
		
		$(".right .ac2").animate({
			bottom:'0px'
		},1000,'swing');
	},2000);
	
	setTimeout(function(){
		$(".left .ac2").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},2000,'swing');
		
		$(".right .ac2").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'75%',
			bottom:'400px'
		},2000,'swing');
	},3500);
	
	//3
	setTimeout(function(){
		$(".left .ac3").animate({
			bottom:'0px'
		},1000,'swing');
		
		$(".right .ac3").animate({
			bottom:'0px'
		},1000,'swing');
	},3500);
	
	setTimeout(function(){
		$(".left .ac3").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},2000,'swing');
		
		$(".right .ac3").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'75%',
			bottom:'400px'
		},2000,'swing');
	},5000);
	
	//4
	setTimeout(function(){
		$(".left .ac4").animate({
			bottom:'0px'
		},1000,'swing');
		
	},5000);
	
	setTimeout(function(){
		$(".left .ac4").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},1000,'swing');
	},6500);
	
	//5
	setTimeout(function(){
		$(".left .ac5").animate({
			bottom:'0px'
		},1000,'swing');
		
	},6500);
	
	setTimeout(function(){
		$(".left .ac5").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},1000,'swing');
	},8000);
	
	//6
	setTimeout(function(){
		$(".left .ac6").animate({
			bottom:'0px'
		},1000,'swing');
		
	},8000);
	
	setTimeout(function(){
		$(".left .ac6").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},1000,'swing');
	},9500);
	
	//7
	setTimeout(function(){
		$(".left .ac7").animate({
			bottom:'0px'
		},1000,'swing');
		
	},9500);
	
	setTimeout(function(){
		$(".left .ac7").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},1000,'swing');
	},11000);
	
	//8
	setTimeout(function(){
		$(".left .ac8").animate({
			bottom:'0px'
		},1000,'swing');
		
	},11000);
	
	setTimeout(function(){
		$(".left .ac8").animate({
			opacity:0,
			width:'0px',
			height:'0px',
			margin:'0px',
			left:'63%',
			bottom:'400px'
		},1000,'swing');
	},12500);
	
	//END
	setTimeout(function(){
		$(".round03 .depth02 .overlay").fadeIn(1000);
		$(".round03 .depth02 .noDisplay").fadeIn(500);
		$(".lose").fadeIn(1000);
	},13000);
	
};

//효과음
function bgm01(){
	$('body').append('<audio src="../sound/bgm1.mp3" autoplay></audio>');
}

function bgm02(){
	$('body').append('<audio src="../sound/bgm2.mp3" autoplay></audio>');
}

function bgm03(){
	$('body').append('<audio src="../sound/bgm3.mp3" autoplay></audio>');
}

function bgm04(){
	$('body').append('<audio src="../sound/bgm4.mp3" autoplay></audio>');
}
