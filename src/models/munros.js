const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')


const Munros =  function() {
  this.data = [];

}


Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/munros'
  const request = new RequestHelper(url)

  const myPromise = request.get();
  myPromise.then((data) => {
    this.data = data;

    PubSub.publish('munrosListView:data', this.data);
  })
  .catch((err) =>{
    console.error(err);
  })
};




module.exports = Munros;
