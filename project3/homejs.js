$(document).ready(function(){
    var i;
    var acc1 = document.getElementsByClassName("accordion1");
    for (i = 0; i < acc1.length; i++) {
        acc1[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc2 = document.getElementsByClassName("accordion2");
    for (i = 0; i < acc2.length; i++) {
        acc2[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc3 = document.getElementsByClassName("accordion3");
    for (i = 0; i < acc3.length; i++) {
        acc3[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc4 = document.getElementsByClassName("accordion4");
    for (i = 0; i < acc4.length; i++) {
        acc4[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc5 = document.getElementsByClassName("accordion5");
    for (i = 0; i < acc5.length; i++) {
        acc5[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc6 = document.getElementsByClassName("accordion6");
    for (i = 0; i < acc6.length; i++) {
        acc6[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc7 = document.getElementsByClassName("accordion7");
    for (i = 0; i < acc7.length; i++) {
        acc7[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var acc8 = document.getElementsByClassName("accordion8");
    for (i = 0; i < acc8.length; i++) {
        acc8[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }




    //Feeding----------------------------------------------
    var num_jia1 = document.getElementById("num-jia1");
    var num_jian1 = document.getElementById("num-jian1");
    var input_num1 = document.getElementById("input-num1");
    var inputNum1=parseInt(input_num1.value);
    var animal1=0;


    //Feeding: add and subtract-------------------------------
    num_jia1.onclick = function() {
        if(input_num1.value < 10) {
            input_num1.value = parseInt(input_num1.value) + 1;
            inputNum1+=1;
        }
    }
    num_jian1.onclick = function() {
        if(input_num1.value <= 0) {
            input_num1.value = 0;
            inputNum1=0;
        } else {
            input_num1.value = parseInt(input_num1.value) - 1;
            inputNum1-=1;
        }
    }

    var num_jia2 = document.getElementById("num-jia2");
    var num_jian2 = document.getElementById("num-jian2");
    var input_num2 = document.getElementById("input-num2");
    var inputNum2=parseInt(input_num2.value);
    var animal2=0;
    num_jia2.onclick = function() {
        if(input_num2.value < 10) {
            input_num2.value = parseInt(input_num2.value) + 1;
            inputNum2+=1;
        }
    }
    num_jian2.onclick = function() {
        if(input_num2.value <= 0) {
            input_num2.value = 0;
            inputNum2=0;
        } else {
            input_num2.value = parseInt(input_num2.value) - 1;
            inputNum2-=1;
        }
    }

    var num_jia3 = document.getElementById("num-jia3");
    var num_jian3 = document.getElementById("num-jian3");
    var input_num3 = document.getElementById("input-num3");
    var inputNum3=parseInt(input_num3.value);
    var animal3=0;
    num_jia3.onclick = function() {
        if(input_num3.value < 10) {
            input_num3.value = parseInt(input_num3.value) + 1;
            inputNum3+=1;
        }
    }
    num_jian3.onclick = function() {
        if(input_num3.value <= 0) {
            input_num3.value = 0;
            inputNum3=0;
        } else {
            input_num3.value = parseInt(input_num3.value) - 1;
            inputNum3-=1;
        }
    }

    //Feeding: min and max------------------------------------
    var feedMax = document.getElementById("selection2-1");
    feedMax.onclick = function(){
        inputNum1 = 10;
        inputNum2 = 10;
        inputNum3 = 10;
        document.getElementById("animal1feed").onclick();
        document.getElementById("animal2feed").onclick();
        document.getElementById("animal3feed").onclick();
    }
    var feedMin = document.getElementById("selection2-2");
    feedMin.onclick = function(){
        inputNum1 = 5;
        inputNum2 = 5;
        inputNum3 = 5;
        document.getElementById("animal1feed").onclick();
        document.getElementById("animal2feed").onclick();
        document.getElementById("animal3feed").onclick();
    }

    //count how many days unfeed-------------------------
    var animalFeedDate = new Date();

    var currentText1 = document.getElementById("animal1FeedDate").textContent;
    console.log(currentText1);
    var newUnfeedDate1 = animalFeedDate.getFullYear() + "-" + animalFeedDate.getMonth() + "-" +  animalFeedDate.getDate();
    if(animal1<5 && currentText1!="None"){
        document.getElementById("animal1FeedDate").innerHTML = " "+newUnfeedDate1;
    }else if(animal1<5){
        document.getElementById("animal1FeedDate").innerHTML = newUnfeedDate1;
    }
    
    var currentText2 = document.getElementById("animal2FeedDate").textContent;
    console.log(currentText2);
    var newUnfeedDate2 = animalFeedDate.getFullYear() + "-" + animalFeedDate.getMonth() + "-" +  animalFeedDate.getDate();
    if(animal2<5 && currentText2!="None"){
        document.getElementById("animal2FeedDate").innerHTML = " "+newUnfeedDate2;
    }else if(animal2<5){
        document.getElementById("animal2FeedDate").innerHTML = newUnfeedDate2;
    }
    
    var currentText3 = document.getElementById("animal3FeedDate").textContent;
    console.log(currentText3);
    var newUnfeedDate3 = animalFeedDate.getFullYear() + "-" + animalFeedDate.getMonth() + "-" +  animalFeedDate.getDate();
    if(animal3<5 && currentText3!="None"){
        document.getElementById("animal3FeedDate").innerHTML = " "+newUnfeedDate3;
    }else if(animal3<5){
        document.getElementById("animal3FeedDate").innerHTML = newUnfeedDate3;
    }
    
    //Feeding: time---------------------------------------
    var feed1 = document.getElementById("animal1feed"); 
    feed1.onclick = function(){
        if((animal1+inputNum1)>10){
            document.getElementById("animal1Error").innerHTML = "ERROR: Overfeed animal, max 10!";
        }else{
            animal1 = animal1+inputNum1;
            document.getElementById("animal1Date").innerHTML = Date();
            document.getElementById("animal1FeedCount").innerHTML = animal1 + "KG.";
            document.getElementById("animal1Error").innerHTML = "";

            if(animal1>=5){ document.getElementById("animal1FeedDate").innerHTML = currentText1;
            }
        }   
    }

    var feed2 = document.getElementById("animal2feed"); 
    feed2.onclick = function(){ 
        if((animal2+inputNum2)>10){
            document.getElementById("animal2Error").innerHTML = "ERROR: Overfeed animal, max 10!";
        }else{
            animal2 = animal2+inputNum2 ;
            document.getElementById("animal2Date").innerHTML = Date();
            document.getElementById("animal2FeedCount").innerHTML = animal2 + "KG.";
            document.getElementById("animal2Error").innerHTML = "";
            if(animal2>=5){ document.getElementById("animal2FeedDate").innerHTML = currentText2;
                          }
        }                          
    }

    var feed3 = document.getElementById("animal3feed"); 
    feed3.onclick = function(){
        if((animal3+inputNum3)>10){
            document.getElementById("animal3Error").innerHTML = "ERROR: Overfeed animal, max 10!";
        }else{
            
            animal3 = animal3+inputNum3;
            document.getElementById("animal3Date").innerHTML = Date();
            document.getElementById("animal3FeedCount").innerHTML = animal3 + "KG.";
            document.getElementById("animal3Error").innerHTML = "";
            if(animal3>=5){ document.getElementById("animal3FeedDate").innerHTML = currentText3;
                          }
        }   
    }





    //    error
    //    column3



    //------------------------------------------------------------
    $("#ok").click(function(){

        //check
        var timecheck=false;
        var box1check=false;
        var box2check=false;

        //get the two time
        var time1=document.getElementById("fromtime");
        var time2=document.getElementById("totime");
        var fromTime = time1.value;
        var toTime = time2.value;
        toTime = toTime+":00";
        fromTime = fromTime+":00";

        //get current date
        var curdate = new Date();
        var iniMonth = curdate.getMonth() + 1;
        //change current month to two digit
        iniMonth = iniMonth.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });

        var currentDate= curdate.getFullYear()+"/"+iniMonth+"/"+curdate.getDate();
        var currentTime= curdate.getHours() + ":" 
        + curdate.getMinutes()+ ":" +curdate.getSeconds();


        //get the date
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;


        //change - to /
        toDate=toDate.replace(/-/g,'/');
        fromDate=fromDate.replace(/-/g,'/');

        //check inicial time
        console.log(fromDate+"||"+currentDate+"||"+toDate);
        console.log(fromTime+"||"+currentTime+"||"+toTime);
        if (fromDate < currentDate){ 
            document.getElementById("DateError").innerHTML = "ERROR: From Time&Date LESSER than Current Date&Time!";
        }else if((fromTime < currentTime)&&(fromDate == currentDate)){
            document.getElementById("DateError").innerHTML = "111ERROR: From Time&Date LESSER than Current Date&Time!"
        }else if ((fromTime > toTime)&&(fromDate >= toDate)) {
            document.getElementById("DateError").innerHTML = "ERROR: To date LESSER than From Date!";
        } else if((fromTime == toTime)&&(fromDate == toDate)){   
            document.getElementById("DateError").innerHTML = "ERROR: DATE and TIMES are same!";
        }else{
            document.getElementById("DateError").innerHTML = "";
            timecheck=true;
        }

        //check box
        var park1 = document.getElementById("park1").checked;
        var park2 = document.getElementById("park2").checked;
        var park3 = document.getElementById("park3").checked;
        if(park1==false && park2==false && park3==false){
            document.getElementById("checkbox1Error").innerHTML = "ERROR: Select at least ONE park!";
        }else{
            document.getElementById("checkbox1Error").innerHTML = "";
            box1check=true;
        }

        var RedLight = document.getElementById("RedLight").checked;
        var BlueLight = document.getElementById("BlueLight").checked;
        var YellowLight = document.getElementById("YellowLight").checked;
        var Sprinkler = document.getElementById("Sprinkler").checked;
        if(YellowLight==false && RedLight==false && BlueLight==false && Sprinkler==false){
            document.getElementById("checkbox2Error").innerHTML = "ERROR: Select at least ONE part!";
        }else{
            document.getElementById("checkbox2Error").innerHTML = "";
            box2check=true;
        }

        //------------------------------------

        if(box1check==true && box2check==true && timecheck==true){
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");

            var currentDate1= currentDate +" " + currentTime;   
            var toDate1 = toDate+" "+toTime
            var fromDate1 = fromDate+" "+fromTime;
            console.log(fromDate1+"||"+currentDate1+"||"+toDate1);

            var diff1 = Math.abs(new Date(currentDate1) - new Date(fromDate1));
            var diff2 = Math.abs(new Date(fromDate1) - new Date(toDate1));
            console.log(diff1);
            console.log(diff2);

            setTimeout(function(){
                if(park1==true){
                    if(RedLight==true){
                        $("input[name='park1R']").prop("checked",true);
                    }
                    if(YellowLight==true){
                        $("input[name='park1Y']").prop("checked",true);

                    }
                    if(BlueLight==true){
                        $("input[name='park1B']").prop("checked",true);


                    }
                    if(Sprinkler==true){
                        $("input[name='park1S']").prop("checked",true);
                    }
                }else if(park2==true){
                    if(RedLight==true){
                        $("input[name='park2R']").prop("checked",true);
                    }
                    if(YellowLight==true){
                        $("input[name='park2Y']").prop("checked",true);

                    }
                    if(BlueLight==true){
                        $("input[name='park2B']").prop("checked",true);


                    }
                    if(Sprinkler==true){
                        $("input[name='park2S']").prop("checked",true);
                    }

                }else if(park3==true){
                    if(RedLight==true){
                        $("input[name='park3R']").prop("checked",true);
                    }
                    if(YellowLight==true){
                        $("input[name='park3Y']").prop("checked",true);

                    }
                    if(BlueLight==true){
                        $("input[name='park3B']").prop("checked",true);


                    }
                    if(Sprinkler==true){
                        $("input[name='park3S']").prop("checked",true);
                    }
                }
            }, diff1);

            setTimeout(function(){
                if(park1==true){
                    if(RedLight==true){
                        $("input[name='park1R']").prop("checked",false);
                    }
                    if(YellowLight==true){
                        $("input[name='park1Y']").prop("checked",false);

                    }
                    if(BlueLight==true){
                        $("input[name='park1B']").prop("checked",false);


                    }
                    if(Sprinkler==true){
                        $("input[name='park1S']").prop("checked",false);
                    }
                }else if(park2==true){
                    if(RedLight==true){
                        $("input[name='park2R']").prop("checked",false);
                    }
                    if(YellowLight==true){
                        $("input[name='park2Y']").prop("checked",false);

                    }
                    if(BlueLight==true){
                        $("input[name='park2B']").prop("checked",false);


                    }
                    if(Sprinkler==true){
                        $("input[name='park2S']").prop("checked",false);
                    }

                }else if(park3==true){
                    if(RedLight==true){
                        $("input[name='park3R']").prop("checked",false);
                    }
                    if(YellowLight==true){
                        $("input[name='park3Y']").prop("checked",false);

                    }
                    if(BlueLight==true){
                        $("input[name='park3B']").prop("checked",false);


                    }
                    if(Sprinkler==true){
                        $("input[name='park3S']").prop("checked",false);
                    }
                }
            }, diff2+diff1);
        }


    });

    $(".lightL1").click(function(){
        var status = document.getElementById("RedLight").checked;
        if(status==false){
            document.getElementById("RedLight").checked=true;
        }else if(status==true){
            document.getElementById("RedLight").checked=false;
        }
    });
    $(".lightL2").click(function(){
        var status = document.getElementById("BlueLight").checked;
        if(status==false){
            document.getElementById("BlueLight").checked=true;
        }else if(status==true){
            document.getElementById("BlueLight").checked=false;
        }
    });
    $(".lightL3").click(function(){
        var status = document.getElementById("YellowLight").checked;
        if(status==false){
            document.getElementById("YellowLight").checked=true;
        }else if(status==true){
            document.getElementById("YellowLight").checked=false;
        }
    });
    $(".lightL4").click(function(){
        var status = document.getElementById("Sprinkler").checked;
        if(status==false){
            document.getElementById("Sprinkler").checked=true;
        }else if(status==true){
            document.getElementById("Sprinkler").checked=false;
        }
    });
    $(".parkL1").click(function(){
        var status = document.getElementById("park1").checked;
        if(status==false){
            document.getElementById("park1").checked=true;
        }else if(status==true){
            document.getElementById("park1").checked=false;
        }
    });
    $(".parkL2").click(function(){
        var status = document.getElementById("park2").checked;
        if(status==false){
            document.getElementById("park2").checked=true;
        }else if(status==true){
            document.getElementById("park2").checked=false;
        }
    });
    $(".parkL3").click(function(){
        var status = document.getElementById("park3").checked;
        if(status==false){
            document.getElementById("park3").checked=true;
        }else if(status==true){
            document.getElementById("park3").checked=false;
        }
    });


    $("#reset").click(function(){
        document.getElementById("park1").checked=false;
        document.getElementById("park2").checked=false;
        document.getElementById("park3").checked=false;
        document.getElementById("RedLight").checked=false;
        document.getElementById("BlueLight").checked=false;
        document.getElementById("YellowLight").checked=false;
        document.getElementById("Sprinkler").checked=false;
    });

    //change check all--lock all
    $("#selection1-1").click(function(){
        //方法一
        $("input[name='lockAll']").prop("checked",true);

        //方法二
        // var btn_group=$("input[name='lockAll']");
        // for(var i=0;i<btn_group.length;i++){
        //     var checkbox_el=$(btn_group[i]);
        //     checkbox_el.prop("checked",true);
        // }
    });

    //change check all--unlock all
    $("#selection1-2").click(function(){
        //方法一
        $("input[name='lockAll']").prop("checked",false);

        //方法二
        // var btn_group=$("input[name='lockAll']");
        // for(var i=0;i<btn_group.length;i++){
        //     var checkbox_el=$(btn_group[i]);
        //     checkbox_el.prop("checked",false);
        // }
    });

    //change check all--lock all
    $("#selection3-1").click(function(){
        //方法一
        $("input[name='park1R']").prop("checked",true);
        $("input[name='park1Y']").prop("checked",true);
        $("input[name='park1B']").prop("checked",true);
        $("input[name='park1S']").prop("checked",true);

        $("input[name='park2R']").prop("checked",true);
        $("input[name='park2Y']").prop("checked",true);
        $("input[name='park2B']").prop("checked",true);
        $("input[name='park2S']").prop("checked",true);

        $("input[name='park3R']").prop("checked",true);
        $("input[name='park3Y']").prop("checked",true);
        $("input[name='park3B']").prop("checked",true);
        $("input[name='park3S']").prop("checked",true);

    });

    //change check all--unlock all
    $("#selection3-2").click(function(){
        //方法一
        $("input[name='park1R']").prop("checked",false);
        $("input[name='park1Y']").prop("checked",false);
        $("input[name='park1B']").prop("checked",false);
        $("input[name='park1S']").prop("checked",false);

        $("input[name='park2R']").prop("checked",false);
        $("input[name='park2Y']").prop("checked",false);
        $("input[name='park2B']").prop("checked",false);
        $("input[name='park2S']").prop("checked",false);

        $("input[name='park3R']").prop("checked",false);
        $("input[name='park3Y']").prop("checked",false);
        $("input[name='park3B']").prop("checked",false);
        $("input[name='park3S']").prop("checked",false);

    });


    //change column1
    function check_lock1(){
        $("input[name='lockAll']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
    }

    //change column3
    function check_lock2(){
        $("input[name='park1R']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park1Y']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park1B']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park1S']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });

        $("input[name='park2R']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park2Y']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park2B']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park2S']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });

        $("input[name='park3R']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park3Y']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park3B']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
        $("input[name='park3S']").each(function () {
            console.log(this);
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
            } else {
                $(this).attr("checked", 'true');
            }
        });
    }



});