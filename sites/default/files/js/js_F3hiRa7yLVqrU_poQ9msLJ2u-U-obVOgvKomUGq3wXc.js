
(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
jQuery(document).ready(function(){
	//global vars
	var source_page = window.location.href;
	var tw_meta = {}; 
	var fb_meta = {};
	
	//gather metadata
	jQuery('meta').each(function(){
		var prop = jQuery(this).attr('property');
		//facebook
		if(prop!== undefined && prop.match('og:') ){
			fb_meta[prop] = jQuery(this).attr('content');
		}
		//twitter
		if(prop!== undefined && prop.match('twitter:') ){
			tw_meta[prop] = jQuery(this).attr('content');
		}
	})
	
	//twitter
	if(tw_meta['twitter:creator']){
			tw_meta['twitter:account'] = tw_meta['twitter:creator'];	
		}
	var data_text = tw_meta['twitter:title'];
	var data_url = tw_meta['twitter:url'];
	var data_account = tw_meta['twitter:account'];
	var twitter_wrap = jQuery('.easy_social-widget-twitter');
	var twitter_btn = jQuery('<a href="https://twitter.com/share">Tweet</a>');
	twitter_btn.addClass('twitter-share-button');
	twitter_btn.attr('data-related', '');
	twitter_btn.attr('data-lang','en');
	twitter_btn.attr('data-text', data_text);
	twitter_btn.attr('data-url', data_url);
	twitter_btn.attr('data-via', data_account);
	twitter_wrap.children().remove();
	jQuery(twitter_wrap).append(twitter_btn);

	//console.log(fb_meta);
	//console.log(twitter_btn);
})
;
