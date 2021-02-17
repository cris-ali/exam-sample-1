import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  model = {
    firstname: "",
    lastname: "",
    gender: ""
  }

  tableRows = [];

  onSubmit(form){
    this.tableRows.push(form.form.value);
  }

  onDelete(index){
    this.tableRows.splice(index,1);
  }
}
