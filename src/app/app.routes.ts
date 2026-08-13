import { Routes } from '@angular/router';
import { Home } from './home/homeComponent';
import { Books } from './books/booksComponent';
import { About } from './about/about';
import { Learn } from './learn/learnComponent';
import { Students } from './students/studentsComponent';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: Books },
  { path: 'about', component: About },
  { path: 'learn', component: Learn, 
  children: [{path:'students', component: Students} ] }
];
