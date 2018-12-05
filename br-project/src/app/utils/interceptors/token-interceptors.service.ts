import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        

        const tokenReq = this.setTokenHeader(req);
        console.log(tokenReq);
        return next.handle(tokenReq);
    }

    private setTokenHeader(req: HttpRequest<any>): HttpRequest<any>{
        const token = "a123456789";
        const headers = req.headers.set('Authorization', token);
        const tokenReq = req.clone({headers});
        return tokenReq;
    }

}