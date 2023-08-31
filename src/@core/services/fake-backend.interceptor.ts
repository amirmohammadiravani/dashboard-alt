// fake-backend.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { FakeBackendService } from '../../@fake-db/fake-backend'
import fakeDb from '../../@fake-db'; 

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private fakeBackendService: FakeBackendService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/users') && request.method === 'GET') {
          const users = this.fakeBackendService.getUsers();
          return of(new HttpResponse({ status: 200, body: users }));
        }

        if (request.url.endsWith('/users') && request.method === 'PUT') {
          const users = this.fakeBackendService.getUsers();
          const newUser = request.body;
          this.fakeBackendService.addUser(newUser);
          return of(new HttpResponse({ status: 200, body: users }));
        }

        // Merge the existing code for other API endpoints here
        if (request.url.endsWith('/getNavigationItems') && request.method === 'GET') {
          const fakeNavigationItems = fakeDb.navigationItems.list;
          return of(new HttpResponse({ status: 200, body: fakeNavigationItems }));
        }

        if (request.url.endsWith('/getInvoices') && request.method === 'GET') {
          const fakeInvoices = fakeDb.invoices.list;
          return of(new HttpResponse({ status: 200, body: fakeInvoices }));
        }

        if (request.url.endsWith('/getProducts') && request.method === 'GET') {
          const fakeProducts = fakeDb.products.list;
          return of(new HttpResponse({ status: 200, body: fakeProducts }));
        }

        return next.handle(request);
      }),
      catchError((error) => {
        console.error('Fake Backend Error:', error);
        return of(new HttpResponse({ status: 500, body: { error: 'Internal Server Error' } }));
      })
    );
  }
}
