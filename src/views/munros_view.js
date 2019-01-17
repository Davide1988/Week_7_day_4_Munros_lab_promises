


const MunrosView = function(space, data){
  this.space = space
  this.data = data

}

MunrosView.prototype.render = function () {

 this.data.forEach((object) => {
     const h1 = document.createElement('h3')
     h1.textContent = object.name
     this.space.appendChild(h1)

     const list = document.createElement('ul')
     this.space.appendChild(list)

     const meaning = document.createElement('li')
     meaning.textContent = `Meaning : ${object.meaning}`

     const height = document.createElement('li')
     height.textContent = `Height : ${object.height}`

     list.appendChild(meaning)
     list.appendChild(height)

 })
};

module.exports = MunrosView;
