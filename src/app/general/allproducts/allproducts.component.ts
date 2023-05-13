import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{

  categoryid:any;
  category:any;
  products:any;
  baseurl = this.api.baseurl;

  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
    this.categoryid = "";
    this.bind();

  }
  /* The `bind()` function is making two API calls using the `api` service. */
  bind(){
    this.api.post("productcategory/get", {data:{id:this.categoryid}}).subscribe((result:any)=>{
      this.category = result.data;
    });
    this.api.post("product/list", {data:{pcid:this.categoryid}}).subscribe((result:any)=>{
      this.products = result.data;
    })
  }


}
