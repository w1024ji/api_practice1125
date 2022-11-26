$(function () {
    document.getElementById('date').value = new Date().toISOString().slice(0, 10);
    $('form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            method: "GET",
            url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
            data: {
                serviceKey: "eR654WhVA2/iRXBlwnzEwvgRkDdAXPLHMwmIm3zmnYRZADkNhoWqA6lNj8QWyUWVyLLBXrrxJ6CkJ0h+4lCvyQ==",
                numOfRows: "20",
                pageNo: "1",
                dataType: "JSON",
                base_date: $('#date').val().replace(/-/g, ""),
                base_time: $('#time').val().replace(/:/g, ""),
                nx: "61",
                ny: "128",
    
            }
            
        })
            .done(function (msg) {
                console.log(msg.response.body.items.item[0].category + " : " + msg.response.body.items.item[0].fcstValue); //기온
                console.log(msg.response.body.items.item[5].category + " : " + msg.response.body.items.item[5].fcstValue); // 하늘 상태
                console.log(msg.response.body.items.item[6].category + " : " + msg.response.body.items.item[6].fcstValue); // 강수 형태
                console.log(msg.response.body.items.item[7].category + " : " + msg.response.body.items.item[7].fcstValue); // 강수 확률
                console.log(msg.response.body.items.item[9].category + " : " + msg.response.body.items.item[9].fcstValue); // 강수량
                console.log(msg.response.body.items.item[10].category + " : " + msg.response.body.items.item[10].fcstValue); // 습도
    })

    
/*
            alert(
`1시간 기온 : ${+ msg.response.body.items.item[0].fcstValue},
하늘 상태 : ${+ msg.response.body.items.item[5].fcstValue},
강수 형태 : ${+ msg.response.body.items.item[6].fcstValue},
강수 확률 : ${+ msg.response.body.items.item[7].fcstValue},
1시간 강수량 : ${+ msg.response.body.items.item[9].fcstValue},
습도 : ${+ msg.response.body.items.item[10].fcstValue}`
            ); */
        });
});