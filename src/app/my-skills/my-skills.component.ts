import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  constructor() { }
  value: any;

  /*Triggers the event that show the progress bar that indicates the skill level */
  showLevel(value) {
    switch (value) {
        case '1':
          this.value = 'Beginner';
        break;
        case '2':
          this.value = 'Intermediate';
        break;
        case '3':
          this.value = 'Advanced';
        break;
        default: this.value = '';
      }
   }

   showPercentage(value): any {
      if (value === 'Advanced') {
        return {'width': '90%'};
      } else if (value === 'Intermediate') {
        return {'width': '60%'};
      } else if (value === 'Beginner') {
        return {'width': '40%'};
      } else {
        return '';
      }
   }

  ngOnInit() {

  }
}
