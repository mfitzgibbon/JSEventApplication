import './general';

import homeScript from './home';
import statusScript from './status';
import aboutScript from './about'

class Page {
    constructor() {
        this.$navbar = document.getElementById('navbar');
        this.$container = document.querySelector("#container");
        this.$script = document.getElementById('script');
    }

    loadHome(){
        const homeHTML = `<div class="form-area">
        <h1 class="title">Javascript Meetup</h1>
        <form action="/register" method="post" id="registrationForm">
          <div class="form-group">
            <label for="username">Name*:</label>
            <input type="text" class="form-control" id="username" name="username">
          </div>
          <div class="form-group">
            <label for="email">Email address*:</label>
            <input type="email" class="form-control" id="email" name="email">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number*:</label>
            <input type="phone" class="form-control" id="phone" name="phone" placeholder="XXX-XXX-XXXX">
          </div>
          <div class="form-group">
            <label for="age">Age*:</label>
            <input type="number" class="form-control" id="age" name="age" min="10" max="25">
          </div>
          <div class="form-group">
            <label for="profession">I am a:</label>
            <select class="form-control" id="profession" name="profession">
              <option value="school">School Student</option>
              <option value="college">College Student</option>
              <option value="trainee">Trainee</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div class="form-group">
            <label>Experience Level:</label>
            <div>
              <div class="radio-inline">
                <label><input type="radio" name="experience" id="experience" value="1" checked>Beginner</label>
              </div>
              <div class="radio-inline">
                <label><input type="radio" name="experience" value="2">Intermediate</label>
              </div>
              <div class="radio-inline">
                <label><input type="radio" name="experience" value="3">Advanced</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="comment">What do you expect to learn from this event:</label>
            <textarea class="form-control" rows="5" name="comment" id="comment"></textarea>
          </div>
          <button id="submit" type="submit" class="btn btn-default">Submit</button>
          <img src="./src/assets/images/loading.gif" alt="loading" class="loading-indicator hidden" id="loadingIndicator">
        </form>
      </div>`
        this.$container.innerHTML = homeHTML;
    }

    loadStatus(){
        const statusHTML = `<h1 class="title">Interested People</h1>
        <div id="loadingIndicator">
          <p>Data loading...</p>
          <image src="./src/assets/images/loading.gif" class="loading-indicator"></image>
        </div>
        <div id="loadingError" class="hidden">
          <h3>Unable to load data...Try refreshing the page.</h3>
        </div>
        <ul class="nav nav-tabs hidden" id="tabArea">
          <li role="presentation" class="active"><a href="" id="experienceTab">Experience</a></li>
          <li role="presentation"><a href="" id="professionTab">Profession</a></li>
          <li role="presentation"><a href="" id="ageTab">Age</a></li>
        </ul>
        <div class="chart-area hidden" id="chartArea">
          <canvas id="experienceChart"></canvas>
          <canvas id="professionChart"></canvas>
          <canvas id="ageChart"></canvas>
        </div>`
        this.$container.innerHTML = statusHTML;
    }

    loadAbout(){
        const aboutHTML = `<div class="container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
      <div class="container">
        <h2>Event Location</h2>
        <div id="map" style="height:500px">
  
        </div>
      </div>`
        this.$container.innerHTML = aboutHTML;
        this.$script.
    }

    addEventListeners(){

    }
}

let mainPage;

window.addEventListener('load', () => {
    new Page();


});