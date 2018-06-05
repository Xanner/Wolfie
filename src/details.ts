import { HttpClient } from "../node_modules/aurelia-http-client";

let client = new HttpClient();
export class Details {
  
  artistName = "";
  apiKey = "ebed450015bbddd54b246d1c2681a7f4";

  artist;
  bindingSpinnerSecond = 0;
  
  artistGetInfo() {
    this.bindingSpinnerSecond = 1;
    let artistInfoResult;
    client.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo" +
      "&artist=" + this.artistName +
      "&api_key=" + this.apiKey +
      "&format=json")
      .then(data => {
        artistInfoResult = JSON.parse(data.response);
        this.artist = artistInfoResult.artist;
        this.bindingSpinnerSecond = 0;
      });
      
  }

  artistTopAlbums = [];
  artistGetTopAlbums() {
    let artistTopAlbumsResult;
    client.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums" +
      "&artist=" + this.artistName +
      "&api_key=" + this.apiKey +
      "&limit=10&format=json")
      .then(data => {
        artistTopAlbumsResult = JSON.parse(data.response);
        this.artistTopAlbums = artistTopAlbumsResult.topalbums.album;
      });
  }

  albumName = "";
  content = [];
  bindingSpinner = 0;

  albumGetInfo(albumName){
    this.bindingSpinner = 1;
    this.albumName = albumName;
    let albumInfoResult;

    client.get("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&" + 
    "api_key=" + this.apiKey + "&artist=" + this.artistName + "&album=" + this.albumName + "&format=json")
      .then(data => {
        albumInfoResult = JSON.parse(data.response);
        this.content = albumInfoResult;
        this.bindingSpinner = 0;
      });
  }

  hideSearchEngine() {
    if (!document.getElementById("searchEngine").hidden) {
      document.getElementById("searchEngine").hidden = true;
    } else {
      document.getElementById("searchEngine").hidden = false;
    }
  }

  activate(params) {
    this.artistName = params.name;
    this.artistGetInfo();
    this.artistGetTopAlbums();
    this.hideSearchEngine();
  }

  deactivate() {
    this.hideSearchEngine();
  }
}
