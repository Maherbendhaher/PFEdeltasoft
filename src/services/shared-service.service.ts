import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedObject: any;

  constructor() { }

  setSelectedObject(object: any) {
    this.selectedObject = object;
  }

  getSelectedObject() {
    return this.selectedObject;
  }
}
