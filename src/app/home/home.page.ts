import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { initializeApp } from "firebase/app";
import { AngularFireDatabase } from '@angular/fire/database';

import { getAnalytics } from "firebase/analytics";

interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// here
export class HomePage {
//added start
//existingScreenOrientation: string;
//  constructor(private so: ScreenOrientation) {
    // get current orientation
//    this.existingScreenOrientation = this.so.type; 
    
    // find out changes in orientation
//    this.so.onChange().subscribe(
//      () => {
//        alert("Orientation updated" + this.so.type);
//        this.existingScreenOrientation = this.so.type;
//      }

//added end
  todos: Array<Todo> = []
  todoEntry: string = ''

  constructor(private nativeStorage: NativeStorage,private db: AngularFireDatabase) {}

  addTodo(){
    let currentId = this.todos.length ? Math.max(...this.todos.map((t) => t.id)) : 0;
    if(this.todoEntry.length != 0){
      this.todos.push({
        id: currentId+1,
        title: this.todoEntry,
        isComplete: false
      })
    }
    this.todoEntry = ''
  }

  setCompleted(id: number){
    let todoToUpdate = this.todos.find(todo => todo.id === id);
    if (todoToUpdate) {
      todoToUpdate.isComplete = true;
    }
  }
  deleteTodo(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  //add start
  // Lock to portrait
//  lockToPortrait(){
//    this.so.lock(this.so.ORIENTATIONS.PORTRAIT);
//  }
  // Lock to landscape
//  lockToLandscape(){
//    this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
//  }
  // Unlock screen orientation 
//  unlockScreenOrientation(){
//    this.so.unlock();
//  }
}