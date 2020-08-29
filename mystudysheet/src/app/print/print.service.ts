import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  handler: any = null;
  constructor(private http: HttpClient) {}

  pay(amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_p39Y1dPetA9mG2Du1N8xZo8500NclY2RGD',
      locale: 'auto',
      token: (token) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        this.chargeCard(token.id, amount);
      },
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100,
    });
  }

  chargeCard(token: string, amount: string) {
    const headers = new HttpHeaders({ token: token, amount: amount });
    this.http
      .post(
        'https://mystudysheet.azurewebsites.net/payment/charge',
        {},
        { headers: headers }
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
