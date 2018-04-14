import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesData: any = {}

  constructor() { }

  ngOnInit() {

    this.servicesData.technology = [{ heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }
      , { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }];
    this.servicesData.bussiness = [{ heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }
      , { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }];
    this.servicesData.marketing = [{ heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }
      , { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }];
    this.servicesData.legal = [{ heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }
      , { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }, { heading: 'Built-with Bootstrap 3.5.x', subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }];
  }

}
