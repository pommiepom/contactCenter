$(function () {

	////////// statusBar //////////

	// const waitCall
	// const waitCall_time = doc.waitCall_time.getHours() + ":" + ("0" + doc.waitCall_time.getMinutes()).slice(-2) +
	// 					":" + ("0" + doc.waitCall_time.getSeconds()).slice(-2)
	// const callack
	// const callBack_time = doc.callBack_time.getHours() + ":" + ("0" + doc.callBack_time.getMinutes()).slice(-2) +
	// 					":" + ("0" + doc.callBack_time.getSeconds()).slice(-2)
	// const allCall
	// const ansCall
	// const dropCall
	// const perDropCall = parseInt(doc.perDropCall)



	////////// card //////////
	// const docCard = [
	// 	{
	// 		name: "Name Surname",
	// 		extNum: "7501",
	// 		profile: "images/profilePicture.png",
	// 		state: "ready",
	// 		time: new Date(),
	// 		inc: "0",
	// 		oc: "0",
	// 		tt: "0"
	// 	}
	// ]
	
	// const addCard = (docCard, index) => {
	// 	console.log(docCard);
	// 	const name = docCard.name
	// 	const extNum = docCard.extNum
	// 	const profile = docCard.profile
	// 	const time = ("0" + docCard.time.getHours()).slice(-2) + ":" + ("0" + docCard.time.getMinutes()).slice(-2) +
	// 		":" + ("0" + docCard.time.getSeconds()).slice(-2)
	// 	const inc = docCard.inc
	// 	const oc = docCard.oc
	// 	const tt = docCard.tt
	// 	const status = docCard.status
	// 	const phoneNum = docCard.phoneNum
	// 	const cusName = docCard.cusName
		
	// 	$('#cardGroup').append($("#card").html());

	// 	$("#name").attr("id", "name-" + index);
	// 	$("#profile").attr("id", "profile-" + index);
	// 	$("#extNum").attr("id", "extNum-" + index);
	// 	$("#time").attr("id", "time-" + index);
	// 	$("#inc").attr("id", "inc-" + index);
	// 	$("#oc").attr("id", "oc-" + index);
	// 	$("#tt").attr("id", "tt-" + index);

	// 	$("#status").attr("id", "status-" + index);
	// 	$("#phoneIcon").attr("id", "phoneIcon-" + index);
	// 	$("#phoneNum").attr("id", "phoneNum-" + index);
	// 	$("#cusName").attr("id", "cusName-" + index);

	// 	$("#name-" + index).text(name)
	// 	$("#profile-" + index).attr("src", profile)
	// 	$("#extNum-" + index).text(extNum)
	// 	$("#time-" + index).text(time)
	// 	$("#inc-" + index).text(inc)
	// 	$("#oc-" + index).text(oc)
	// 	$("#tt-" + index).text(tt)
	// 	$("#status-" + index).text(status)
	// 	$("#phoneNum-" + index).text(phoneNum)
	// 	$("#cusName-" + index).text(cusName)


	// 	if (docCard.state == "available") {
	// 		$("#cardBody").removeClass("info-wrapup");
	// 	}
	// 	else if (docCard.state == "wrapup") {
	// 		$("#cardBody").addClass("info-wrapup");
	// 	}

	// 	if(head == "yellow") {
	// 		$("#cardHead").addClass("cardHead-wrapup")
	// 	}
	// }

	// for (let i = 0; i < docCard.length; i++) {
	// 	addCard(docCard[i], i)
	// }




	////////// waiting call table //////////
	const docWaiting = [{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		}
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
			const waiting_time = docWaiting[i].time.getHours() + ":" + ("0" + docWaiting[i].time.getMinutes()).slice(-2) +
				":" + ("0" + docWaiting[i].time.getSeconds()).slice(-2)

			$("#waiting_num-" + i).html(waiting_num)
			$("#waiting_phone-" + i).html(waiting_phone)
			$("#waiting_name-" + i).html(waiting_name)
			$("#waiting_time-" + i).html(waiting_time)
		} else {
			$("#waiting_num-" + i).html(null)
			$("#waiting_phone-" + i).html(null)
			$("#waiting_name-" + i).html(null)
			$("#waiting_time-" + i).html(null)
		}
	}



	////////// agent queue table //////////
	const docAgent = [{
			name: "Name Surname",
			ext: "7501",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7502",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7503",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7504",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7505",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7506",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7507",
			time: new Date()
		},
		{
			name: "Name Surname",
			ext: "7508",
			time: new Date()
		}
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
		const agent_time = docAgent[i].time.getHours() + ":" + ("0" + docAgent[i].time.getMinutes()).slice(-2) +
			":" + ("0" + docAgent[i].time.getSeconds()).slice(-2)

		$("#agent_num-" + i).html(agent_num)
		$("#agent_name-" + i).html(agent_name)
		$("#agent_ext-" + i).html(agent_ext)
		$("#agent_time-" + i).html(agent_time)
	}



	////////// agent queue table //////////
	const docCallback = [{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		}
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
		const callback_time = docCallback[i].time.getHours() + ":" + ("0" + docCallback[i].time.getMinutes()).slice(-2) +
			":" + ("0" + docCallback[i].time.getSeconds()).slice(-2)

		$("#callback_num-" + i).html(callback_num)
		$("#callback_phone-" + i).html(callback_phone)
		$("#callback_name-" + i).html(callback_name)
		$("#callback_time-" + i).html(callback_time)
	}



	////////// left table //////////
	maxHeight = $("#supBody").outerHeight(true) - ((3 * $(".tableName").outerHeight(true)) + $("#waitingCall").outerHeight(true) +
		$("#agentQueue").outerHeight(true) + $("#h_callBack").height())

	$("#b_callBack").css({
		"max-height": maxHeight
	})

	if ($("#b_callBack").prop('scrollHeight') > $("#b_callBack").height()) {
		$("#h_callBack").css({
			"padding-right": "16px"
		})
	}

	if ($("#b_agentQueue").prop('scrollHeight') > $("#b_agentQueue").height()) {
		$("#h_agentQueue").css({
			"padding-right": "16px"
		})
	}

})