import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent,
        data: {
          title: 'landing',
          description:
            'Start writing your business logic right away without any concern on architecture matters.',
          robots: 'index, follow',
        },
      },
    ]),
  ]
})
export class LandingPageModule { }