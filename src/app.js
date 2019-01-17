const Munros = require('./models/munros.js')
const MunrosListView = require('./views/munros_list_view.js')


document.addEventListener('DOMContentLoaded', () => {


  const container = document.querySelector('.munros-container')
  const selection = document.querySelector('#munros-selector')
  const viewer = new MunrosListView(container , selection)
  viewer.bindEvents();


  const getData = new Munros
  getData.getData();



});
