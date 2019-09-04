$(function () {

	const setState = () => {
		if ($("#state").val() == "ready") {
			$(".statusBar").css({ "background-color": "#49d761" })
		}
		else if ($("#state").val() == "notReady") {
			$(".statusBar").css({ "background-color": "#e44141" })
		}
	}

	// name
	// state
	// time = (doc.time.getHours() + ":" + ("0" + doc.time.getMinutes()).slice(-2) + ":" + ("0" + doc.time.getSeconds()).slice(-2)
	// ext
	// loginTime = (doc.loginTime.getHours() + ":" + ("0" + doc.loginTime.getMinutes()).slice(-2) + ":" + ("0" + doc.loginTime.getSeconds()).slice(-2)
	// logonTime = (doc.logonTime.getHours() + ":" + ("0" + doc.logonTime.getMinutes()).slice(-2) + ":" + ("0" + doc.logonTime.getSeconds()).slice(-2)
	// order
	// waitCall = ("0" + doc.waitCall).slice(-3)
	// waitCall_time = (doc.waitCall_time.getHours() + ":" + ("0" + doc.waitCall_time.getMinutes()).slice(-2) + ":" + ("0" + doc.waitCall_time.getSeconds()).slice(-2)
	// dropCall = ("0" + doc.dropCall).slice(-3)
	// dropCall_time = (doc.dropCall_time.getHours() + ":" + ("0" + doc.dropCall_time.getMinutes()).slice(-2) + ":" + ("0" + doc.dropCall_time.getSeconds()).slice(-2)
	// callIn = ("00" + doc.callIn).slice(-3)
	// callOut = ("00" + doc.callOut).slice(-3)
	// missCall = ("00" + doc.missCall).slice(-3)

	
	setState();

	// change state
	$("#state").change(() => {
		setState();
	})

	//clear field
	$('#clearInput').on('click', () => {
		$('#phoneSearch').val('').focus()
	})
	
	
})