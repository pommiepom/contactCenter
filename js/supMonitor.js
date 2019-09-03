// t_agentQueue

$(function () {
	maxHeight = $("#supBody").outerHeight(true) - ( (3 * $(".tableName").outerHeight(true)) + $("#waitingCall").outerHeight(true)
				+ $("#agentQueue").outerHeight(true) + $("#h_callBack").height())
				
	$("#b_callBack").css({"max-height": maxHeight})

	if ($("#b_callBack").prop('scrollHeight') > $("#b_callBack").height() ) {
        $("#h_callBack").css({"padding-right": "16px"})
	}

	if ($("#b_agentQueue").prop('scrollHeight') > $("#b_agentQueue").height() ) {
        $("#h_agentQueue").css({"padding-right": "16px"})
	}
})

