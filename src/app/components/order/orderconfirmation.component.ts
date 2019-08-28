import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shoppingcart.service";

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./orderconfirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {
  public constructor(private shoppingCartService: ShoppingCartService) {}

  public ngOnInit(): void {
    this.shoppingCartService.empty();
  }
}
