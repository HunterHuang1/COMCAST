Assignment of Comcast

steps to run the program:

1. npm install
2. npm start

description: Here the project consists of two parts. The Node part to extract the data from two html files. I used fs and jquery to help fetching data. The fetchdata.js is the code file. And fetch data by the given format, output into the json files(obj1.json and obj2.json)

And then I used react to do the app development, total 3 components. Search component to do the customer filter, Hotels component do the data processing, and Hotel component to do the presentation.

On the screen, you must select the website type(2) , then the destination(2), then the check-in/out time(10/20 - 10/27) then You can see the filtered hotel units below. No Selected website or destination or wrong check-in/out show nothing.

Also you can select sort by "price", then click search to do the hotel sorting.

You can also change the website and destination, "hotel.com" - "Chicago" and "expedia" - "NewYork". Just these 2 pairs. Wrong pair shows nothing.
