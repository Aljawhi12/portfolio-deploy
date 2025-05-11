import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full', children: [{
            path: 'service', component: ServiceComponent

        }]
    },

    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'aboutme', component: AboutmeComponent
    },
    {
        path: 'projects', component: ProjectsComponent
    },
    {
        path: '**', redirectTo: ''
    },

];
