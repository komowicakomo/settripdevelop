function getQueryStrings() {
    var assoc  = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for(var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }

    return assoc;
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var q = getQueryStrings();
var view = config.view;
var height = 0;
var hide = 0;
if(q['view'] != undefined)
    view = q["view"];
var keyView = "";

function showList()
{
  if(keyView == "")
  {
    keyView = 'list_' + makeid();
    var div = $("<div>")
      .attr("id",keyView)
      .css({
        position:'fixed',
        bottom:'0px',
        backgroundColor: '#1b1a26',
        opacity: '0.8',
        color: '#fff',
        width: '100%',
        zIndex: '999999',
        padding: '10px'
      });

    var ul = $("<ul>").css({
      listStyleType: 'circle',
      listStylePosition: 'inside',
      'width':$('body').width()-60,
      'display':'block',
      'float':'right',
      paddingLeft: 0
    });

    for(var i in lists)
    {
      var li = $("<li>")
      .css({
        float: 'left',
        width: '20%'
      })
      .append(
        $("<a>")
          .attr('href',lists[i]['path'])
          .html(lists[i]['name'])
          .css({
            color:'#fff'
          })
          .hover(function(){
            $(this).css('cursor','pointer');
          })
          .mouseout(function(){
            $(this).css('cursor','default');
          })
      );
      $(ul).append(li);
    }
    $(div).append(ul);
    $("body").append(
      $(div)
    );
    hide = $(div).height();
    height = hide+20;
    $(div).before(
      $('<span>').addClass('template-handle-'+keyView).html('Show').css({
          backgroundColor: '#1b1a26',
          color: '#fff',
          padding:'2px 10px',
          zIndex: '9999999',
          borderRadius: '0px 5px 0px 0px',
          position:'fixed',
          bottom:'0px',
          left:'0px',
          textTransform: 'uppercase',
          cursor:'pointer',
          fontSize: '12px',
          opacity: '0.8'
      })
    );
    $(div).css({
      bottom: -height
    });

    // $("#" + keyView).animate({
    //   bottom: '0px'
    // });
    $(".template-handle-" + keyView).click(function(){
      showList();
    });
  }
  else {
    if($("#" + keyView).css('bottom') == '0px')
    {
      $("#" + keyView).animate({
        bottom: -height
      });
      $(".template-handle-" + keyView).animate({
        bottom: 0
      }, function(){
        $(".template-handle-" + keyView).html('Show');
      });
    }
    else {
      $("#" + keyView).animate({
        bottom: '0px'
      });
      $(".template-handle-" + keyView).animate({
        bottom: height
      },function(){
          $(".template-handle-" + keyView).html('Hide');
      });
    }
  }
}

$(document).ready(
  function(){

    $(config.container).load(config.viewfolder + '/' + view + '.' + config.extension, function(){
      run();
        $('.loading').removeClass('active');
    });

    if(lists != undefined)
    {
      $(document).keypress(function(event){
        if(String.fromCharCode(event.which).toLowerCase() == 'c')
        {
          showList();
        }
      });
    }

    showList();
  }
);
