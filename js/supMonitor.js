$(function () {
	////////// left table //////////
	maxHeight = $("#supBody").outerHeight(true) - ( (3 * $(".tableName").outerHeight(true)) + $("#waitingCall").outerHeight(true)
				+ $("#agentQueue").outerHeight(true) + $("#h_callBack").height())

	$("#b_callBack").css({"max-height": maxHeight})

	if ($("#b_callBack").prop('scrollHeight') > $("#b_callBack").height() ) {
        $("#h_callBack").css({"padding-right": "16px"})
	}

	if ($("#b_agentQueue").prop('scrollHeight') > $("#b_agentQueue").height() ) {
        $("#h_agentQueue").css({"padding-right": "16px"})
	}

	////////// card //////////
	const addCard = (state, index) => {
		const name = "Name Surname"
		const extNum = "7501"
		const profile = "images/profilePicture.png"
		const time = "00:00:00"
		const inc = "0"
		const oc = "0"
		const tt = "0:00"
		
		$('#cardGroup').append($("#card").html());

		$("#name").attr("id", "name-" + index);
		$("#profile").attr("id", "profile-" + index);
		$("#extNum").attr("id", "extNum-" + index);
		$("#time").attr("id", "time-" + index);
		$("#inc").attr("id", "inc-" + index);
		$("#oc").attr("id", "oc-" + index);
		$("#tt").attr("id", "tt-" + index);
		$("#cardHead").attr("id", "cardHead-" + index);
		$("#status").attr("id", "status-" + index);
		$("#phoneIcon").attr("id", "phoneIcon-" + index);
		$("#phoneNum").attr("id", "phoneNum-" + index);
		$("#cusName").attr("id", "cusName-" + index);
		$("#cardBody").attr("id", "cardBody-" + index);

		$("#name-" + index).text(name)
		$("#profile-" + index).attr("src", profile)
		$("#extNum-" + index).text(extNum)
		$("#time-" + index).text(time)
		$("#inc-" + index).text(inc)
		$("#oc-" + index).text(oc)
		$("#tt-" + index).text(tt)


		if (state == "ready") {
			const status = "Ready"
			const phoneIcon = "icon/phone-call Avialable grey.png"
		
			$("#cardHead-" + index).css({"background-color": "#4ad762"})
			$("#status-" + index).text(status)
			$("#phoneIcon-" + index).attr("src", phoneIcon)
			$("#phoneNum-" + index).css({"display": "none"})
			$("#cusName-" + index).css({"display": "none"})
			$("#cardBody-" + index).css("background-color", "#ffffff")
		}
		else if (state == "yellow") {
			const status = "Wrap Up"
			const phoneNum = "0987654321"
			const cusName = "Customer Name"
		
			$("#cardHead-" + index).css({"background-color": "#f0ce0e"})
			$("#status-" + index).text(status)
			$("#phoneIcon-" + index).css({"display": "none"})
			$("#phoneNum-" + index).text(phoneNum)
			$("#cusName-" + index).text(cusName)
			$("#cardBody-" + index).css("background-color", "#ffe699")
		}
		else if (state == "notReady") {
			const status = "Not Ready"
		
			$("#cardHead-" + index).css({"background-color": "#e44141"})
			$("#status-" + index).text(status)
			$("#phoneIcon-" + index).css({"display": "none"})
			$("#phoneNum-" + index).css({"display": "none"})
			$("#cusName-" + index).css({"display": "none"})
			$("#cardBody-" + index).css("background-color", "#ffffff")
		}
	}

	addCard("ready",0)
	addCard("yellow", 1)
	addCard("notReady", 2)
})

