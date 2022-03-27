var today = moment().format("dddd MMM Do YYYY, h:mm a");
let dayText = $("#currentDay");
let timeBlock = $(".time-block");
let rowContent = $(".row-content");
let saveBtn = $(".saveBtn");
let sixBtn = $("#6-btn");
let block0 = $("block-0");

dayText.append(today)

console.log(moment().format("H"))

saveBtn.click(function () {
        let rowText1 = $("#hour-1").val();
        localStorage.setItem("appt-text-1", rowText1);
        let rowText2 = $("#hour-2").val();
        localStorage.setItem("appt-text-2", rowText2);
        let rowText3 = $("#hour-3").val();
        localStorage.setItem("appt-text-3", rowText3);
        let rowText4 = $("#hour-4").val();
        localStorage.setItem("appt-text-4", rowText4);
        let rowText5 = $("#hour-5").val();
        localStorage.setItem("appt-text-5", rowText5);
        let rowText6 = $("#hour-6").val();
        localStorage.setItem("appt-text-6", rowText6);
        let rowText7 = $("#hour-7").val();
        localStorage.setItem("appt-text-7", rowText7);
        let rowText8 = $("#hour-8").val();
        localStorage.setItem("appt-text-8", rowText8);
        let rowText9 = $("#hour-9").val();
        localStorage.setItem("appt-text-9", rowText9);
        let rowText10 = $("#hour-10").val();
        localStorage.setItem("appt-text-10", rowText10);
        let rowText11 = $("#hour-11").val();
        localStorage.setItem("appt-text-11", rowText11);
        let rowText12 = $("#hour-12").val();
        localStorage.setItem("appt-text-12", rowText12);
        let rowText13 = $("#hour-13").val();
        localStorage.setItem("appt-text-13", rowText13);
        let rowText14 = $("#hour-14").val();
        localStorage.setItem("appt-text-14", rowText14);
        let rowText15 = $("#hour-15").val();
        localStorage.setItem("appt-text-15", rowText15);
        let rowText16 = $("#hour-16").val();
        localStorage.setItem("appt-text-16", rowText16);
      })

    let rowDetails1 = localStorage.getItem("appt-text-1");
    $("#hour-1").val(rowDetails1);
    let rowDetails2 = localStorage.getItem("appt-text-2");
    $("#hour-2").val(rowDetails2);
    let rowDetails3 = localStorage.getItem("appt-text-3");
    $("#hour-3").val(rowDetails3);
    let rowDetails4 = localStorage.getItem("appt-text-4");
    $("#hour-4").val(rowDetails4);
    let rowDetails5 = localStorage.getItem("appt-text-5");
    $("#hour-5").val(rowDetails5);
    let rowDetails6 = localStorage.getItem("appt-text-6");
    $("#hour-6").val(rowDetails6);
    let rowDetails7 = localStorage.getItem("appt-text-7");
    $("#hour-7").val(rowDetails7);
    let rowDetails8 = localStorage.getItem("appt-text-8");
    $("#hour-8").val(rowDetails8);
    let rowDetails9 = localStorage.getItem("appt-text-9");
    $("#hour-9").val(rowDetails9);
    let rowDetails10 = localStorage.getItem("appt-text-10");
    $("#hour-10").val(rowDetails10);
    let rowDetails11 = localStorage.getItem("appt-text-11");
    $("#hour-11").val(rowDetails11);
    let rowDetails12 = localStorage.getItem("appt-text-12");
    $("#hour-12").val(rowDetails12);
    let rowDetails13 = localStorage.getItem("appt-text-13");
    $("#hour-13").val(rowDetails13);
    let rowDetails14 = localStorage.getItem("appt-text-14");
    $("#hour-14").val(rowDetails14);
    let rowDetails15 = localStorage.getItem("appt-text-15");
    $("#hour-15").val(rowDetails15);
    let rowDetails16 = localStorage.getItem("appt-text-16");
    $("#hour-16").val(rowDetails16);

  function colorTime()
  {for (i = 0; i < timeBlock.length; i++) {
    
    if (moment().format("H") === timeBlock[i].getAttribute("number")) {
        $(timeBlock[i]).css("background-color", "red")
        
    }
    else if (moment().format("H") > timeBlock[i].getAttribute("number")) {
        $(timeBlock[i]).css("background-color", "green")
    }
    else if (moment().format("H") < timeBlock[i].getAttribute("number")) {
        $(timeBlock[i]).css("background-color", "grey")
    }
}
}

colorTime()

