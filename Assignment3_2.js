
        orderData = {
            'Below 500': 20,
            '500-1000': 29,
            '1000-1500': 30,
            '1500-2000': 44,
            'Above 2000': 76
            };





const total = Object.values(orderData).reduce((x,y)=>x+y)

console.log(total)

const header = Object.keys(orderData);

console.log(header)

let arr = [];

    const response = header.map((item,index)=>{
        obj={
            'id':index + 1,
            'order':item,
            'percentage':((orderData[item]/total)*100).toFixed(2),
            'restaurant:':'Punjabi Tadka'
        }
        arr.push(obj)
    }   )

    console.log(arr);

    