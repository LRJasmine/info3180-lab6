/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {
      return {};
    }
});

Vue.component('news-list', {
    template: `
    <div class="news">
        <h2>News</h2>
        <div class="news__item">
            <div v-for="article in articles" class="news__item card">
                <div class="card-body">
                    <h4 class="card-title"> {{ article.title }} </h4>
                    <p class="card-text text-center text-muted">
                        <img :src="article.urlToImage" class="card-img-top"/>
                    </p>
                    <p class="card-text">{{ article.description }}</p>
                </div>
            <div/>
        </div>
        
    </div>
    `,
     created: function() {
         let self = this;
         
         fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                self.articles = data.articles;
                console.log(data);
            });
     },
     data: function() {
         return{
             articles: []
         }
     }
});


Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
})


let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World! Welcome to VueJS'
    }
});

