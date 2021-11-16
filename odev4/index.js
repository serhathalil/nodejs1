const fs=require('fs');

// fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log("dosya oluşturuldu");
// })

// fs.readFile('employees.json','utf-8',(err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     console.log("dosya okundu");
// })


fs.readFile("employees.json", (err, data) => {   
    if (err) {
        return console.error(err);
    };

    var data = JSON.parse(data.toString());
    data.salary = "2300";  
    var writeData = fs.writeFile("employees.json", JSON.stringify(data), (err, result) => {  
        if (err) {
            return console.error(err);
        } else {
            console.log(result);
            console.log("Success");
        }

    });
});


fs.appendFile('employees.json',  '"name": "Employee 2 Name", "salary": 3000', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });