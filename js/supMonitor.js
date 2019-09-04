$(function () {
	////////// card //////////
	const addCard = (state, index) => {
		const date = new Date()
		
		const name = "Name Surname"
		const extNum = "7501"
		const profile = "images/profilePicture.png"
		const time = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) 
					+ ":" + ("0" + date.getSeconds()).slice(-2)
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



	////////// waiting call table //////////
	const docWaiting = [
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}
	]
	
	for (let i = 0; i < 4; i++) {
		$('#b_waitingCall').append($("#waitingCall_tr").html());

		$("#waiting_num").attr("id", "waiting_num-" + i);
		$("#waiting_phone").attr("id", "waiting_phone-" + i);
		$("#waiting_name").attr("id", "waiting_name-" + i);
		$("#waiting_time").attr("id", "waiting_time-" + i);

		if (docWaiting[i]) {
			const waiting_num = i + 1 + "."
			const waiting_phone = docWaiting[i].phone
			const waiting_name = docWaiting[i].name
			const waiting_time = docWaiting[i].time.getHours() + ":" + ("0" + docWaiting[i].time.getMinutes()).slice(-2) 
							+ ":" + ("0" + docWaiting[i].time.getSeconds()).slice(-2)

			$("#waiting_num-" + i).html(waiting_num)
			$("#waiting_phone-" + i).html(waiting_phone)
			$("#waiting_name-" + i).html(waiting_name)
			$("#waiting_time-" + i).html(waiting_time)
		}
		else {
			$("#waiting_num-" + i).html(null)
			$("#waiting_phone-" + i).html(null)
			$("#waiting_name-" + i).html(null)
			$("#waiting_time-" + i).html(null)
		}
	}


	
	////////// agent queue table //////////
	const docAgent = [
		{ name: "Name Surname", ext: "7501", time: new Date()}, 
		{ name: "Name Surname", ext: "7502", time: new Date()}, 
		{ name: "Name Surname", ext: "7503", time: new Date()}, 
		{ name: "Name Surname", ext: "7504", time: new Date()}, 
		{ name: "Name Surname", ext: "7505", time: new Date()}, 
		{ name: "Name Surname", ext: "7506", time: new Date()}, 
		{ name: "Name Surname", ext: "7507", time: new Date()}, 
		{ name: "Name Surname", ext: "7508", time: new Date()}
	]

	for (let i = 0; i < docAgent.length; i++) {
		$('#b_agentQueue').append($("#agentQueue_tr").html());

		$("#agent_num").attr("id", "agent_num-" + i);
		$("#agent_name").attr("id", "agent_name-" + i);
		$("#agent_ext").attr("id", "agent_ext-" + i);
		$("#agent_time").attr("id", "agent_time-" + i);
		
		const agent_num = i + 1 + "."
		const agent_name = docAgent[i].name
		const agent_ext = docAgent[i].ext
		const agent_time = docAgent[i].time.getHours() + ":" + ("0" + docAgent[i].time.getMinutes()).slice(-2) 
						+ ":" + ("0" + docAgent[i].time.getSeconds()).slice(-2)
		
		$("#agent_num-" + i).html(agent_num)
		$("#agent_name-" + i).html(agent_name)
		$("#agent_ext-" + i).html(agent_ext)
		$("#agent_time-" + i).html(agent_time)
	}
	
	
	
	////////// agent queue table //////////
	const docCallback = [
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()},
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()},
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}, 
		{ phone: "0987654321", name: "Name Surname", time: new Date()}
	]

	for (let i = 0; i < docCallback.length; i++) {
		$('#b_callBack').append($("#callBack_tr").html());

		$("#callback_num").attr("id", "callback_num-" + i);
		$("#callback_phone").attr("id", "callback_phone-" + i);
		$("#callback_name").attr("id", "callback_name-" + i);
		$("#callback_time").attr("id", "callback_time-" + i);

		const callback_num = i + 1 + "."
		const callback_phone = docCallback[i].name
		const callback_name = docCallback[i].phone
		const callback_time = docCallback[i].time.getHours() + ":" + ("0" + docCallback[i].time.getMinutes()).slice(-2) 
						+ ":" + ("0" + docCallback[i].time.getSeconds()).slice(-2)

		$("#callback_num-" + i).html(callback_num)
		$("#callback_phone-" + i).html(callback_phone)
		$("#callback_name-" + i).html(callback_name)
		$("#callback_time-" + i).html(callback_time)
	}
	


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

})

