class restaurantManager{
    restaurantList =[
        {
            id:1,
            Name:"ARSALAN",
            address:"Park Circus    ",
            City:"Kolkata"
        },
        {
            id:2,
            Name:"Chowdhury Dhaba",
            address:"Chandi Chawk",
            City:"Delhi"
        },
        {
            id:3,
            Name:"Alibaba",
            address:"Gol Park",
            City:"Mumbai"
        },
        {
            id:4,
            Name:"Sukh Sagar",
            address:"SSSS",
            City:"Chennai"
        } ]


        printAllRestaurantNames(){
            return this.restaurantList.map(restaurant=>restaurant.Name) 
           } 
    
           filterRestaurantByCity(cityName) {
            return this.restaurantList.filter(xx=>xx.City == cityName)         
    }


}

const resObjRestList = new restaurantManager();
var restlist = resObjRestList.printAllRestaurantNames();

console.log(restlist)


