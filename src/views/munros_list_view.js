const PubSub = require('../helpers/pub_sub.js')
const MunrosView = require('./munros_view.js')


const MunrosListView = function(container, selection){
  this.container = container
  this.selection = selection
  this.data = null;

};


MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('munrosListView:data', (evt) =>{
    this.data = evt.detail;
    this.populate(this.data)
  })
  this.selection.addEventListener('change', (evt) => {
    const regionTargeted = evt.target.value;
    const foundRegionMountains = this.data.filter((mountain) =>{
      if (mountain.region === regionTargeted){
        return mountain
      }
    })
     const selectedMunrosView = new MunrosView(this.container, foundRegionMountains);
     selectedMunrosView.render();
  })
};


MunrosListView.prototype.populate = function (mountains) {
    const unique = [...new Set(mountains.map(mountain => mountain.region))];
    unique.forEach( name  => {
    const option = document.createElement('option')
    option.textContent = name
    this.selection.appendChild(option)
  })
};



module.exports = MunrosListView
