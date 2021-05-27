import { Component } from '@angular/core';//Component class from angular's core library

@Component({//all components must be declared with a selector.  The template is the reusable html. Inject selectors inside of templates
  selector: 'pm-root',
template:`
<ul class="navbar navbar-expand navbar-light bg-light"> 
<li a class="navbar-brand" style="list-style-type:none;">{{title}}</li>
<li><a class="nav-link" routerLink='/welcome' style="color: black; list-style-type:none; padding:2rem;">Home</a></li>
<li><a class="nav-link" routerLink='/products' style="color: black; list-style-type:none;padding:2rem;">Product List</a></li>
</ul>

<div class="container">
<router-outlet></router-outlet>
</div>
`

})
export class AppComponent {
  title = 'Angular: Getting Started';
}


/*Class is what we will call when we import into our module
we can also assign properties inside of this class*/
