import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  dataList: Array<any>;
  postForm: FormGroup;
  constructor(public http: HttpClient, private formBuilder: FormBuilder,) {
    this.postForm = this.formBuilder.group({
      title: new FormControl(''),
      body: new FormControl(''),
      id: new FormControl(''),
      userId: new FormControl('')
    });
    this.dataList = [];

  }

  ngOnInit(): void {
    this.getPosts();
  }

  onSubmit(){
    let payload = this.postForm.value;
    if(payload.id){
      this.updatePost(payload.id,payload);
    }
    else{
      this.createPost(payload);

    }
    // let url = "https://jsonplaceholder.typicode.com/posts";
    // this.http.post(url, JSON.stringify(payload)).subscribe((res:any)=>{
    //   payload.id = res.id;
    //   this.dataList.unshift(payload);
    //   this.postForm.reset();
  // });
}
  // createPost(postTitle: any) {
  //   let titleText = postTitle.value;
    
  //   let payload = {
  //     id: "",
  //     title: titleText,
  //     body: "Body-" + titleText,
      
  //   }

  // }

  createPost(payload: any){
    let url = "https://jsonplaceholder.typicode.com/posts";
    this.http.post(url, JSON.stringify(payload)).subscribe((res:any)=>{
      payload.id = res.id;
      this.dataList.unshift(payload);
      this.postForm.reset();
    });
  }

  updatePost(postId:string, payload: any){
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    this.http.patch(url, JSON.stringify(payload)).subscribe((res:any)=>{
      console.log("res::",res);

      let data = this.dataList.find(o => o.id === postId);
      data.title = payload.title;
      data.body = payload.body;
      // let index = this.dataList.indexOf(post);
      // this.dataList.unshift(payload);
      // this.postForm.reset();
    });
  }


  deletePost(post:any){
    let url =`https://jsonplaceholder.typicode.com/posts/${post.id}`;
    this.http.delete(url).subscribe((respose: any)=>{
      console.log("Response::",respose);
      let index = this.dataList.indexOf(post);
      this.dataList.splice(index,1);
    }, (error:any)=>{
      console.log("Error::",error);
    });
    console.log("I am here after delete")

  }

  editPost(data:any){
    // this.postForm.value.title = data.title;
    // this.postForm.value.body = data.body;
    // this.postForm.value.id = data.id;
    // this.postForm.value.userId = data.userId;

    this.postForm.get("title")?.setValue(data.title);
    this.postForm.get("body")?.setValue(data.body);
    this.postForm.get("id")?.setValue(data.id);
    this.postForm.get("userId")?.setValue(data.userId);
  }
  getPosts(){
    let url ="https://jsonplaceholder.typicode.com/posts";
    this.http.get(url).subscribe((res:any)=>{
      console.log("Response::",res);
      this.dataList = res;
    })
  }

}
