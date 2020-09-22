import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  planTitle = '';
  planValue = '';
  formPrice: FormGroup;
  constructor(private httpClient: HttpClient, private userFB: FormBuilder, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.formPrice = this.userFB.group({
      name: [''],
      phone: [''],
      email: [''],
      city: [''],
      address: [''],
    });
  }

  openModal(content, plan) {
    switch (plan) {
      case '1':
        this.planTitle = 'Plano Básico';
        this.planValue = 'R$ 149,90';
        break;
      case '2':
        this.planTitle = 'Intermediário';
        this.planValue = 'R$ 199,90';
        break;
      case '3':
        this.planTitle = 'Diretor';
        this.planValue = 'R$ 299,90';
        break;
      case '4':
        this.planTitle = 'Customizável';
        this.planValue = 'R$ Consulte-nos';
        break;
    }
    this.modalService.open(content, { centered: true });
  }

  sendMail(formValues){
    this.modalService.dismissAll();

    this.send(this.prepareUser());
  }

  send(formdata: any) {
    this.modalService.open('Contato enviado com sucesso', { centered: true });
    const forms = {
      name: formdata.name,
      email: formdata.email,
      phone: formdata.phone,
      city: formdata.city,
      address: formdata.address
    };

    const httpHeaders = new HttpHeaders();
    return this.httpClient.post<any>('api/index.php', forms, {headers: httpHeaders}).subscribe(
      result => {
      }
    );
  }

  prepareUser(): any {
    const controls = this.formPrice.controls;
    // tslint:disable-next-line:variable-name
    const _contact: any = [];
    _contact.name = controls.name.value;
    _contact.phone = controls.phone.value;
    _contact.email = controls.email.value;
    _contact.city = controls.city.value;
    _contact.address = controls.address.value;
    return _contact;
  }
}
