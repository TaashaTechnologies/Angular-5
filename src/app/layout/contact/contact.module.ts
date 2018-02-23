import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
    	CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ContactRoutingModule],
    declarations: [ContactComponent]
})
export class ContactModule {}