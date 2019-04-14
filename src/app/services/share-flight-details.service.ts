import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private sub: any;

    sendMessage(message: any) {
        this.sub = message;
    }

    getMessage(): any {
        return this.sub;
    }
}