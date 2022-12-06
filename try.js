const Data=new Date()

const getDate=Data.getDate()

const getMonth=Data.getMonth()+1

const getyear=Data.getFullYear()


console.log(getDate+"/"+getMonth+"/"+getyear)




const hours=Data.getHours() % 12 || 12;

const minuts=Data.getMinutes()

console.log(hours+":"+minuts)


