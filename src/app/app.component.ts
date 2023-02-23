import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatSortModule, SortDirection } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tableTest';
  movies: any = {"movies": {}};
  filterObj = {
    "name": "",
    "year": "",
    "genre": [],
    "rating": "",
    "PageNumber": 1,
    "PageSize": 5,
    "sort" : "name",
    "sortOrder" : "asc",
    "search": ""
  }
  size ="5";
  displayedColumns : string[] = ['name', 'year', 'genre', 'rating']
  constructor (private http : HttpClient) {}

  ngOnInit () : void {
    this.getAllMovies();
  }
  getAllMovies() {
    const url = `http://localhost:8080/api/movies?page=${this.filterObj.PageNumber}&sort=${this.filterObj.sort},${this.filterObj.sortOrder}&genre=${this.filterObj.genre.toString()}&search=${this.filterObj.search}`;
    this.http.get(url).subscribe((data: any)=> {
      this.movies = data;
    })
  }
  setSearch(search:string) {
    this.filterObj.search= search;
    this.getAllMovies();
  }
  setSort(sort: string, sortOrder:SortDirection) {
    this.filterObj.sort = sort;
    this.filterObj.sortOrder = sortOrder;
    this.getAllMovies();
  }
  setFilterGenre (genre:any) {
    this.filterObj.genre = genre;
    this.getAllMovies();
  }
  onPrevious() {
    this.filterObj.PageNumber= this.filterObj.PageNumber-1;
    this.getAllMovies();
  }
  onForward() {
    this.filterObj.PageNumber++;
    this.getAllMovies();
  }
}
