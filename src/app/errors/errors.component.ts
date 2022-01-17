import { Component} from '@angular/core'

@Component({
    template:`
        <h3 class="errorMessage">404 Page Not Found</h3>
        <h4 class="errorMessage">Page you are looking for doesn't exist</h4>
    `,
    styles:[`
        .errorMessage{
            margin-top :50px;
            font-size: 40px;
            text-align: center;
        }`]
})

export class ErrorsComponent{

}