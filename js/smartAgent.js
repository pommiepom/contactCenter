$(function () {
	const doc = {
		profile: "images/profilePicture.png",
		name: "Name Surname",
		callTime: new Date(),
		extNum: "7500",
		loginTime: new Date(),
		logonTime: new Date(),
		talkTime: new Date(),
		order: "",
		waitCall: 5,
		waitCall_time: new Date(),
		dropCall: 13,
		dropCall_time: new Date(),
		inCall: 23,
		outCall: 14,
		missCall: 2
	}

	const profile = doc.profile
	const name = doc.name
	const callTime = (doc.callTime.getHours() + ":" + ("0" + doc.callTime.getMinutes()).slice(-2) + ":" + ("0" + doc.callTime.getSeconds()).slice(-2))
	const extNum = doc.extNum
	const loginTime = (doc.loginTime.getHours() + ":" + ("0" + doc.loginTime.getMinutes()).slice(-2) + ":" + ("0" + doc.loginTime.getSeconds()).slice(-2))
	const logonTime = (doc.logonTime.getHours() + ":" + ("0" + doc.logonTime.getMinutes()).slice(-2) + ":" + ("0" + doc.logonTime.getSeconds()).slice(-2))
	const talkTime = (doc.talkTime.getHours() + ":" + ("0" + doc.talkTime.getMinutes()).slice(-2) + ":" + ("0" + doc.talkTime.getSeconds()).slice(-2))
	const order = doc.order
	const waitCall = ("0" + doc.waitCall).slice(-2)
	const waitCall_time = (doc.waitCall_time.getHours() + ":" + ("0" + doc.waitCall_time.getMinutes()).slice(-2) + ":" +
		("0" + doc.waitCall_time.getSeconds()).slice(-2))
	const dropCall = ("0" + doc.dropCall).slice(-2)
	const dropCall_time = (doc.dropCall_time.getHours() + ":" + ("0" + doc.dropCall_time.getMinutes()).slice(-2) + ":" +
		("0" + doc.dropCall_time.getSeconds()).slice(-2))
	const inCall = ("00" + doc.inCall).slice(-3)
	const outCall = ("00" + doc.outCall).slice(-3)
	const missCall = ("00" + doc.missCall).slice(-3)

	$("#profile").attr("src", profile)
	$("#name").text(name)
	$("#callTime").text(callTime)
	$("#extNum").text(extNum)
	$("#loginTime").text(loginTime)
	$("#logonTime").text(logonTime)
	$("#talkTime").text(talkTime)
	$("#order").text(order)
	$("#waitCall").text(waitCall)
	$("#waitCall_time").text(waitCall_time)
	$("#dropCall").text(dropCall)
	$("#dropCall_time").text(dropCall_time)
	$("#inCall").text(inCall)
	$("#outCall").text(outCall)
	$("#missCall").text(missCall)


	// table waiting call
	const docWaiting = [
		{
			phone: "0987654321",
			state: "Available",
			time: new Date()
		},
		{
			phone: "0987654321",
			state: "Hold",
			time: new Date()
		},
		{
			phone: "0987654321",
			state: "Hold",
			time: new Date()
		},
		{
			phone: "0987654321",
			state: "Hold",
			time: new Date()
		}
	]

	for (let i = 0; i < 4; i++) {
		$('#b_waitingCall').append($("#waitingCall_tr").html());

		$("#waiting_num").attr("id", "waiting_num-" + i);
		$("#waiting_phone").attr("id", "waiting_phone-" + i);
		$("#waiting_state").attr("id", "waiting_state-" + i);
		$("#waiting_time").attr("id", "waiting_time-" + i);

		if (docWaiting[i]) {
			const waiting_num = i + 1 + "."
			const waiting_phone = docWaiting[i].phone
			const waiting_state = docWaiting[i].state
			const waiting_time = docWaiting[i].time.getMinutes() + ":" + ("0" + docWaiting[i].time.getSeconds()).slice(-2)

			$("#waiting_num-" + i).text(waiting_num)
			$("#waiting_phone-" + i).text(waiting_phone)
			$("#waiting_state-" + i).text(waiting_state)
			$("#waiting_time-" + i).text(waiting_time)
		}
	}

	if (docWaiting.length > 3) {
		$( ".waitingCallTable td" ).css( "height", "calc(120px/4)" );
	}
	else {
		$( ".waitingCallTable td" ).css( "height", `calc(120px/${docWaiting.length})` );
	}



	const setState = () => {
		if ($("#state").val() == "ready") {
			$(".statusBar").css({
				"background-color": "#49d761"
			})
		} else if ($("#state").val() == "notReady") {
			$(".statusBar").css({
				"background-color": "#e44141"
			})
		}
	}

	setState();

	// change state
	$("#state").change(() => {
		setState();
	})

	//clear field
	$('#clearInput').on('click', () => {
		$('#phoneSearch').val('').focus()
	})









	$("#profile").css('cursor', 'pointer')
	$("#button_waitCall").css('cursor', 'pointer')
	$("#button_dropCall").css('cursor', 'pointer')
	$("#bt_setting").css('cursor', 'pointer')

	$("#bt_setting").click(() => {
		$("#myModal").modal();
	});
	
	$("#runningText").text("Running Text")
	$('.marquee').marquee({ duration: 7500 })
})