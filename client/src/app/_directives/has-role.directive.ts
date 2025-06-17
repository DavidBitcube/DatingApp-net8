import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]', // *appHasRole
  standalone: true
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  private accountService = inject(AccountService);
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

ngOnInit(): void {
  const roles = this.accountService.roles();
  if (Array.isArray(roles) && roles.some(role => this.appHasRole.includes(role))) {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainerRef.clear();
  }
}

}