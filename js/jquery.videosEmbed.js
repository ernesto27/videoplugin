;(function($){

	$.fn.videosEmbed = function(options){
		var defaults = {
			width : 425,
			height : 355,
			autoplay: 0,
			startTime: 60
		};

		var  opt = $.extend(defaults,options);

		return this.each(function(){
			var self = $(this),
				id = self.attr("href").match("[\?&]v=([^&#]*)")[1];



			var modalBox = $("#modal-box"),
				overlay = $("#overlay"),
				videoContainer = $("#video");

			self.on("click",function(e){
				e.preventDefault();
				
	
				overlay.add(modalBox).fadeIn();

				
				var embed = $("<iframe>",{
					width: opt.width,
					height: opt.height,
					src: "http://www.youtube.com/embed/"+id+"?autoplay="+opt.autoplay+"#t="+opt.startTime+"s",
					frameborder: 0,
				})

				embed.appendTo(videoContainer);


			})


			$("#close-box").on("click",function(e){
					e.preventDefault();
					videoContainer.empty();
					overlay.add(modalBox).hide();
			})

		
		})
	}
})(jQuery)