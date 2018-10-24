var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');


//first fetch
var obj1 = {
Website: 'www.hotels.com',

  destination: "",

  CheckIn: "",

  CheckOut: "",

  Rooms: 1,

  Adults: 2,

  Children: 0,

  data: []
};

var $ = cheerio.load(fs.readFileSync('Hotels.com - hotels in Chicago, Illinois, United States of America.html'));

   var destination = $('input#q-destination').val();
//    console.log(b);
    obj1.destination = destination;

   var check_in = $('input.query-localised-check-in').val();
//    console.log(c);
    obj1.CheckIn = check_in;

   var check_out = $('input.query-localised-check-out').val();
//    console.log(d);
    obj1.CheckOut= check_out;

    // console.log(obj1);

   //every li tag the hotel unit
    $('li.hotel').each(function(i, elem) {
        console.log(i);
            var imgSrc = $(this).find('img').css('background-image');
            imgSrc = imgSrc.substr(5, imgSrc.length - 7);
                console.log(imgSrc);
            var name= $(this).find('h3.p-name').text();
                console.log(name);
            var address = $(this).find('a.map-link').text();
                console.log(address);
            var rate = $(this).find('div.guest-reviews-badge').text();
                console.log(rate);
            var value1 = $(this).find('a:has(b)').text();
                if(!isNaN(parseInt(value1.substring(1))))
                console.log(value1);
            if ((value1 === ''))
                {
                    var value2 = $(this).find('a:has(ins)').text();
                        if(!isNaN(parseInt(value2.substring(1))))
                        console.log(value2);
                }

            var price = 0;
            var temp = [];
                if(value1 !==""){
                    temp = value1.split("$");
                    price = parseInt(temp[1]);
                }
                else{
                    temp = value2.split("$");
                    price = parseInt(temp[temp.length-1]);
                }
            obj1.data.push({imgSrc: imgSrc, hotelName: name, address:address, rating:rate, nightlyPrice: price});
        });
        console.log(obj1);

        fs.writeFileSync("obj1.json",JSON.stringify(obj1),function (err) {
            if (err) throw err ;
            console.log("File Saved !"); 
        }) 

        //the second fetch
        var obj2 = {
            Website: 'www.expedia.com',
            
              destination: "",
            
              CheckIn: "",
            
              CheckOut: "",
            
              Rooms: 1,
            
              Adults: 2,
            
              Children: 0,
            
              data: []
            };
            
            var $ = cheerio.load(fs.readFileSync('New York (and vicinity) Hotel Search Results _ Expedia.html'));
            
               var destination = $('span.destinationName').text();
            //    var destination = $('span.date-with-dow').text();
               console.log(destination);
                // obj1.destination = destination;
            
               var check_in = $('span#wizardSummaryStartDateMobile').find('span.date-without-dow').text();
               console.log(check_in);
            //     obj1.CheckIn = check_in;
            
            var CheckOut = $('span#wizardSummaryEndDateMobile').find('span.date-without-dow').text();
                console.log(CheckOut);
            //     obj1.CheckOut= check_out;
            
                // console.log(obj1);
            
               //every li tag the hotel unit
                $('section.cf article.hotel').each(function(i, elem) {
                    console.log(i);
                        var imgSrc = $(this).find('div.hotel-thumbnail').css('background-image');
                         if(imgSrc !== undefined){
                            imgSrc = imgSrc.replace(/^\s+|\s+$/g,"");
                        imgSrc = imgSrc.substring(5, imgSrc.length-2);
                        if(imgSrc.charAt(0) === '/'){
                            imgSrc = "https:"+imgSrc;
                        }
                            console.log(imgSrc);
                        }
                        var name= $(this).find('h3.visuallyhidden').text();
                            if(name !== "")
                                console.log(name);
                        var address = $(this).find('li.neighborhood').text();
                        address = address.replace(/^\s+|\s+$/g,"");
                            console.log(address);
                        var rate = $(this).find('span.ratingText').text();
                            console.log(rate);
            
                        var price = $(this).find('span.actualPrice').text();
                        price = price.replace(/^\s+|\s+$/g,"");
                        var priceEnd = parseInt(price.substring(1));
                            console.log(priceEnd);
            
                        obj2.data.push({imgSrc: imgSrc, hotelName: name, address:address, rating:rate, nightlyPrice: priceEnd});
                    });
                    console.log(obj2);
            
                    fs.writeFileSync("obj2.json",JSON.stringify(obj2),function (err) {
                        if (err) throw err ;
                        console.log("File Saved !"); 
                    }) 





