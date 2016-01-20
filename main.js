var appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  appname: 'createnewtestapp01',
  username: 'RIvfxo1u1',
  password: 'dee8ee52-8b75-4b5b-be4f-9df3c364f59f'
});

var jsonObject = {
    "NoOfCars":10,
    "PriceSurge":this.NoOfCars*2
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function InsertData(){
  var cars = randomIntFromInterval(1,500);
  var surge =0;
  if (cars > 200){
    surge = cars/100;
  }
  jsonObject.NoOfCars=cars;
  jsonObject.PriceSurge=Math.round(surge);

  appbaseRef.index({
      type: 'books',
      id: 'X1',
      body: jsonObject
  }).on('data', function(response) {
      console.log('Data inserted');
  }).on('error', function(error) {
      console.log(error);
  });
}

setInterval(InsertData,5000);
