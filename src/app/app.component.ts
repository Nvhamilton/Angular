import { Component } from '@angular/core';//Component class from angular's core library

@Component({//all components must be declared with a selector.  The template is the reusable html. Inject selectors inside of templates
  selector: 'pm-root',
template:
`<div>      <h1>{{title}}</h1>
            <pm-products></pm-products> 
</div>`
//templates are built in between backticks.  Selectors are chosen with matching tags 

})
export class AppComponent {
  title = 'Angular: Getting Started';
}//Class is what we will call when we import into our module
//we can also assign properties inside of this class
