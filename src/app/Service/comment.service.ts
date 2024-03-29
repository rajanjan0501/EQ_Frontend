import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from '../model/comment';
import { AddblogService } from './addblog.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private blgs:AddblogService,private http:HttpClient) { }
  addComments(info:comment)
  {
    return this.http.post(`http://dashboard-anjan.itcblogs.xyz/dashboard/addComment`,info)
  }
  showComments(id:string)
  {
    return this.http.get(`http://dashboard-anjan.itcblogs.xyz/dashboard/getComments/${id}`)
  }
}
