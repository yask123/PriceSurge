var appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  appname: 'createnewtestapp01',
  username: 'RIvfxo1u1',
  password: 'dee8ee52-8b75-4b5b-be4f-9df3c364f59f'
});

appbaseRef.getStream({
      type: 'books',
      id: 'X1'
}).on('data', function(response) {
      console.log("new document update: ", response._source.NoOfCars)
      document.write(response._source.PriceSurge);
}).on('error', function(error) {
      console.log("getStream() failed with: ", error)
})