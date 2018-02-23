import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [routerTransition()]
})
export class ContactComponent implements OnInit {
	public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    

    constructor() 
    {
    	this.sliders.push(
    	    {
                imagePath: 'assets/contact/slider1.jpg',
                label: "SOFTWARE DEVELOPMENT SERVICES INDIA",
                text:
                    'SOFTWARE DEVELOPMENT OUTSOURCING, OFFSHORE DEVELOPMENT CENTER (ODC), SOFTWARE PROCESS CONSULTING, START-UP MENTORING'
            },
            {
                imagePath: 'assets/contact/slider2.jpg',
                label: 'SOFTWARE DEVELOPMENT SERVICES INDIA',
                text:
                    'SOFTWARE DEVELOPMENT OUTSOURCING, OFFSHORE DEVELOPMENT CENTER (ODC), SOFTWARE PROCESS CONSULTING, START-UP MENTORING'
            },
            {
                imagePath: 'assets/contact/slider3.jpg',
                label: 'SOFTWARE DEVELOPMENT SERVICES INDIA',
                text:
                    'SOFTWARE DEVELOPMENT OUTSOURCING, OFFSHORE DEVELOPMENT CENTER (ODC), SOFTWARE PROCESS CONSULTING, START-UP MENTORING'
            }
            
    	);    
    }

    ngOnInit() {}

	public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }    
    
}
