const PubSub = require('../helpers/pub_sub.js')
const MunrosView = require('./munros_view.js')


const MunrosListView = function(container){
  this.container = container

};


MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('munrosListView:data', (evt) =>{
    const data = evt.detail;
    const munrosView = new MunrosView(this.container, data)
    munrosView.render();
  })
};


module.exports = MunrosListView
