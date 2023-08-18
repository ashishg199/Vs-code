class restaurantManager {
    //Array of objects
    restaurantList = [
      {
        id: 1,
        restaurantname: "GreenVilla",
        address: "Godauliya",
        city: "Varanasi",
      },
      {
        id: 2,
        restaurantname: "Kakke Da Dhaba",
        address: "Gurugram",
        city: "Haryana",
      },
      {
        id: 3,
        restaurantname: "KFC",
        address: "Santacruz East",
        city: "Mumbai",
      },
      {
        id: 4,
        restaurantname: "Pizza Hut",
        address: "Sundarpur",
        city: "Varanasi",
      },
    ];
  
    printAllRestaurantNames = () => {
      return this.restaurantList.map((data) => {
        return data.restaurantname;
      });
    };
  
    filterRestaurantByCity = (cityName) => {
      return this.restaurantList.filter((data) => {
        return data.city == cityName;
      });
    };
  }
  
  let restObj = new restaurantManager();
  
  console.log(restObj);
  console.log(restObj.printAllRestaurantNames()); //['KFC', 'Dominos', 'Burger King', 'Subway']
  // restObj.printAllRestaurantNames();
  console.log(restObj.filterRestaurantByCity("Mumbai"));
  console.log(restObj.filterRestaurantByCity("Varanasi"));
  console.log(restObj.filterRestaurantByCity("Varanasi")[0]);

//=========================================================================================
 //2 
  var orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500": 30,
    "1500-2000": 44,
    "Above 2000": 76,
  };
  
  //a
  let out = 0;
  for (key in orderData) {
    out += orderData[key];
  }
  console.log(out); 

  //b
  const proportion = Object.keys(orderData);
  console.log(proportion)
 
  //c
  function getPercent(orderData) {
    let output=[]
    index = 1;
    for (key in orderData) {
      let percentValue = ((orderData[key] / out) * 100).toFixed(2);
      
      let myObj = {};
     
      myObj.id = index++ ;
      myObj.order = key;
      myObj.order_Percent = `${percentValue}`;
      myObj.restaurant = "Punjabi Tadka";
      output.push(myObj);
    }
    return output;
  }
  console.log(getPercent(orderData));
    