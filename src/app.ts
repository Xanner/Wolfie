import { HttpClient } from "../node_modules/aurelia-http-client";
import {Router, RouterConfiguration} from 'aurelia-router'
import "../src/style.css"

export class App {
 router:Router;
 
 configureRouter(config: RouterConfiguration, router: Router){
    config.title = "Search Artists";
    config.map([
      {route: ["details/:name"],name: "details", moduleId: "details"},
      {route: "", name: "index", moduleId:"index"}
    ]);
    this.router = router;
  }

  message = "Search your favorite artist!";
  apiKey ="ebed450015bbddd54b246d1c2681a7f4"
  
  bindingSpinner = 0;
  limitSize = 1000;
  artistName = "";
  artistsResult = [];

  
  searchArtist() {
    let client = new HttpClient();
    let searchedArtists;
    
    if (this.artistName.length > 2) {
      this.bindingSpinner = 1;
      client.get("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" +
        this.artistName + "&api_key=" + this.apiKey + "&limit=" + this.limitSize + "&format=json")
        .then(data => {
          searchedArtists = JSON.parse(data.response);
          this.artistsResult = searchedArtists.results.artistmatches.artist;
          this.bindingSpinner = 0;
        });
    }
  }
}
