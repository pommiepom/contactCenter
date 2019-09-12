$(function () {

	////////// statusBar //////////
	const doc = {
		waitCall: 5,
		waitCall_time: new Date(),
		callack: 3,
		callBack_time: new Date(),
		allCall: 15,
		ansCall: 8,
		dropCall: 8,
		perDropCall: 7.6
	}

	const waitCall = doc.waitCall
	const waitCall_time = doc.waitCall_time.getHours() + ":" + ("0" + doc.waitCall_time.getMinutes()).slice(-2) +
						":" + ("0" + doc.waitCall_time.getSeconds()).slice(-2)
	const callack = doc.callack
	const callBack_time = doc.callBack_time.getHours() + ":" + ("0" + doc.callBack_time.getMinutes()).slice(-2) +
						":" + ("0" + doc.callBack_time.getSeconds()).slice(-2)
	const allCall = doc.allCall
	const ansCall = doc.ansCall
	const dropCall = doc.dropCall
	const perDropCall = parseInt(doc.perDropCall)

	$("#waitCall").text(waitCall)
	$("#waitCall_time").text(waitCall_time)
	$("#callack").text(callack)
	$("#callBack_time").text(callBack_time)
	$("#allCall").text(allCall)
	$("#ansCall").text(ansCall)
	$("#dropCall").text(dropCall)
	$("#perDropCall").text(perDropCall)




	////////// card //////////
	const docCard = [
		{
			name: "Name Surname",
			extNum: "7501",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "5",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7502",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7503",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7504",
			profile: "images/profilePicture.png",
			state: "wrapUp",
			status: "Reserved",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "reserved"
		},
		{
			name: "Name Surname",
			extNum: "7505",
			profile: "images/profilePicture.png",
			state: "wrapUp",
			status: "Talking IN",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "inCall"
		},
		{
			name: "Name Surname",
			extNum: "7506",
			profile: "images/profilePicture.png",
			state: "wrapUp",
			status: "Wrap Up",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "wrapUp"
		},
		{
			name: "Name Surname",
			extNum: "7507",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7508",
			profile: "images/profilePicture.png",
			state: "wrapUp",
			status: "Talking OUT",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "outCall"
		},
		{
			name: "Name Surname",
			extNum: "7509",
			profile: "images/profilePicture.png",
			state: "notReady",
			status: "Meeting",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7510",
			profile: "images/profilePicture.png",
			state: "notReady",
			status: "Break",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7511",
			profile: "images/profilePicture.png",
			state: "notReady",
			status: "Break",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "outCall"
		},
		{
			name: "Name Surname",
			extNum: "7512",
			profile: "images/profilePicture.png",
			state: "notReady",
			status: "Meeting",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7513",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7514",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
		{
			name: "Name Surname",
			extNum: "7515",
			profile: "images/profilePicture.png",
			state: "wrapUp",
			status: "Reserved",
			phoneNum: "0987654321",
			cusName: "Customer Name",
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "reserved"
		},
		{
			name: "Name Surname",
			extNum: "7516",
			profile: "images/profilePicture.png",
			state: "ready",
			status: "Ready",
			phoneNum: null,
			cusName: null,
			time: new Date(),
			inc: "0",
			oc: "0",
			tt: new Date(),
			calling: "notCalling"
		},
	]
	
	const addCard = (docCard, index) => {
		const name = docCard.name
		const extNum = docCard.extNum
		const profile = docCard.profile
		const state = docCard.state
		const status = docCard.status
		const phoneNum = docCard.phoneNum
		const cusName = docCard.cusName
		const time = ("0" + docCard.time.getHours()).slice(-2) + ":" + ("0" + docCard.time.getMinutes()).slice(-2) +
					":" + ("0" + docCard.time.getSeconds()).slice(-2)
		const inc = docCard.inc
		const oc = docCard.oc
		const tt = ("0" + docCard.tt.getHours()).slice(-2) + ":" + ("0" + docCard.tt.getMinutes()).slice(-2)
		const calling = docCard.calling
		
		$('#cardGroup').append($("#cardEle").html());
		$("#card").attr("id", "card-" + index)

		$("#name").attr("id", "name-" + index);
		$("#extNum").attr("id", "extNum-" + index);
		$("#profile").attr("id", "profile-" + index);
		$("#state").attr("id", "state-" + index);
		$("#status").attr("id", "status-" + index);
		$("#phoneNum").attr("id", "phoneNum-" + index);
		$("#cusName").attr("id", "cusName-" + index);
		$("#phoneIcon").attr("id", "phoneIcon-" + index);
		$("#time").attr("id", "time-" + index);
		$("#inc").attr("id", "inc-" + index);
		$("#oc").attr("id", "oc-" + index);
		$("#tt").attr("id", "tt-" + index);
		$("#cardHead").attr("id", "cardHead-" + index);
		$("#cardBody").attr("id", "cardBody-" + index);

		$("#name-" + index).text(name)
		$("#extNum-" + index).text(extNum)
		$("#profile-" + index).attr("src", profile)
		$("#status-" + index).text(status)
		$("#time-" + index).text(time)
		$("#inc-" + index).text(inc)
		$("#oc-" + index).text(oc)
		$("#tt-" + index).text(tt)
		
		if (calling == "notCalling") {
			$("#cardBody-" + index).addClass("info-notCalling");
			$("#phoneNum-" + index).text(null)
			$("#cusName-" + index).text(null)

			if (state == "ready") {
				$("#cardHead-" + index).addClass("cardHead-ready");
				$("#phoneIcon-" + index).attr("src", "icon/phone-call-Avialable-grey.png")
			}
			else {
				$("#cardHead-" + index).addClass("cardHead-notReady");
				$("#phoneIcon-" + index).attr("src", null)
			}
		}
		else {
			$("#cardBody-" + index).addClass("info-calling");
			$("#phoneNum-" + index).text(phoneNum)
			$("#cusName-" + index).text(cusName)

			if (state == "wrapUp") {
				$("#cardHead-" + index).addClass("cardHead-wrapUp");
			}
			else {
				$("#cardHead-" + index).addClass("cardHead-notReady");
			}

			if (calling == "inCall") {
				$("#phoneIcon-" + index).attr("src", "icon/phone-call(1).png")
			}
			else if (calling == "outCall") {
				$("#phoneIcon-" + index).attr("src", "icon/phone-call(OUT).png")
			}
			else if (calling == "reserved") {
				$("#phoneIcon-" + index).attr("src", "icon/telephone-ring.png")
			}
			else if (calling == "wrapUp") {
				$("#phoneIcon-" + index).attr("src", null)
			}
		}		
	}

	for (let i = 0; i < docCard.length; i++) {
		addCard(docCard[i], i)
	}




	////////// waiting call table //////////
	const docWaiting = [
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
	const docAgent = [
		{
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

	for (let i = 0; i < 3; i++) {
		$('#b_agentQueue').append($("#agentQueue_tr").html());

		$("#agent_num").attr("id", "agent_num-" + i);
		$("#agent_name").attr("id", "agent_name-" + i);
		$("#agent_ext").attr("id", "agent_ext-" + i);
		$("#agent_time").attr("id", "agent_time-" + i);

		if (docAgent[i]) {
			const agent_num = i + 1 + "."
			const agent_name = docAgent[i].name
			const agent_ext = docAgent[i].ext
			const agent_time = docAgent[i].time.getHours() + ":" + ("0" + docAgent[i].time.getMinutes()).slice(-2) +
				":" + ("0" + docAgent[i].time.getSeconds()).slice(-2)

			$("#agent_num-" + i).html(agent_num)
			$("#agent_name-" + i).html(agent_name)
			$("#agent_ext-" + i).html(agent_ext)
			$("#agent_time-" + i).html(agent_time)
		} else {
			$("#agent_num-" + i).html(null)
			$("#agent_name-" + i).html(null)
			$("#agent_ext-" + i).html(null)
			$("#agent_time-" + i).html(null)
		}
	}



	////////// agent queue table //////////
	const docCallback = [
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
		},
		{
			phone: "0987654321",
			name: "Name Surname",
			time: new Date()
		}
	]

	for (let i = 0; i < 6; i++) {
		$('#b_callBack').append($("#callBack_tr").html());

		$("#callback_num").attr("id", "callback_num-" + i);
		$("#callback_phone").attr("id", "callback_phone-" + i);
		$("#callback_name").attr("id", "callback_name-" + i);
		$("#callback_time").attr("id", "callback_time-" + i);

		const callback_num = i + 1 + "."
		const callback_phone = docCallback[i].phone
		const callback_name = docCallback[i].name
		const callback_time = docCallback[i].time.getHours() + ":" + ("0" + docCallback[i].time.getMinutes()).slice(-2) +
			":" + ("0" + docCallback[i].time.getSeconds()).slice(-2)

		$("#callback_num-" + i).html(callback_num)
		$("#callback_phone-" + i).html(callback_phone)
		$("#callback_name-" + i).html(callback_name)
		$("#callback_time-" + i).html(callback_time)
	}




//$("body").height() - (($("#headRow").outerHeight(true) + $("#silentBar").outerHeight(true))+30)

	if ($('#silentBar').css('display') == "none") {
		$("#cardGroup").height(525)
	}
	else {
		$("#cardGroup").height(525 - $("#silentBar").outerHeight(true))
	}
	
	if ($("#cardGroup").prop('scrollHeight') > $("#cardGroup").height()) {
		$("#cardGroup").css({"padding-right": "0px"})
	}
})