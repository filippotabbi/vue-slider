var app = new Vue({
  el: '#app',
  data: {
    index: 0,
    arrayImgs: [
      'https://www.vegaluxury.it/wp-content/uploads/2020/12/Ferrari-Tributo-Gialla.png',
      'https://www.oneclickdrive.com/uploads/Rolls_Royce_Cullinan_2019_7904_-9_small.jpg?v2=3',
      'https://i.pinimg.com/736x/85/a5/b1/85a5b1aff47d5ce7e417124be959942c.jpg'
    ],
  },
  methods: {
    next : function () {
      if (this.index < this.arrayImgs.length - 1) {
        this.index++
      }
      else {
        this.index = 0;
      }

    },
    prev : function () {
      if (this.index > 0 ) {
        this.index--
      }
      else {
        this.index = 2
      }
    },
    dotselect : function (index) {
      this.index = index
    },
  }
})
