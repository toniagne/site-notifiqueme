import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { DescriptionComponent } from './description/description.component';
import { NotifyComponent } from './notify/notify.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import {CarouselModule} from 'angular-bootstrap-md';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import { ContactDialogComponent } from './dialogs/contact-dialog/contact-dialog.component';
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective, DescriptionComponent, NotifyComponent, WhatsappComponent, SocialIconsComponent, ContactDialogComponent, AlertDialogComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    CarouselModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
  ],
  // tslint:disable-next-line: max-line-length
    exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective, DescriptionComponent, NotifyComponent, WhatsappComponent, SocialIconsComponent]
})
export class SharedModule { }
