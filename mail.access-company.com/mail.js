
function setLabelColumnWidth(param_width)
{
	  var canvas_frame_doc = document.getElementById("canvas_frame");
    var body_tag = canvas_frame_doc.contentDocument.body;
    var label_div = body_tag.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1];
    var message_div = body_tag.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[2];
    
    console.log(label_div.style.width);
    var offset_width;
    var label_new_width;
    var message_new_width;
    
    var label_org_width = parseInt(label_div.style.width);
    var message_org_width = parseInt(message_div.style.width);
    if ( label_org_width >= param_width ) {
    	offset_width = param_width - label_org_width;
    }
    else {
    	offset_width = label_org_width - param_width;
    }
    
    var message_new_width = message_org_width + offset_width + "px";
    
		label_div.style.width = param_width + "px";
		message_div.style.width = message_new_width;
		console.log(label_div.style.width);
}

function setLabelColumnWidthWithOption()
{
	chrome.extension.sendRequest({method: "getLabelWidth"}, function(response) {
  	setLabelColumnWidth(response.labelWidth);
	});
}

function init()
{
	setLabelColumnWidthWithOption();
}

init();