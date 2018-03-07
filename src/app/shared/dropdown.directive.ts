import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Bind this property to an css class in our case the class 'open' from bootstrap.
  @HostBinding('class.open') isOpen = false;

  // Our directive listens for a click event and performs the function we defined once the click
  // event happens on the underlying element of the directive.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
