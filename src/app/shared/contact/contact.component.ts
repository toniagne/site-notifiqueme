import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  constructor(private httpClient: HttpClient, private userFB: FormBuilder, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.formContact = this.userFB.group({
      name: [''],
      phone: [''],
      email: [''],
      message: [''],
    });
  }

  sendMail(formValues){
    this.send(this.prepareUser());
  }

  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  send(formdata: any) {
    const forms = {
      name: formdata.name,
      email: formdata.email,
      phone: formdata.phone,
      message: formdata.message,
    };

    const httpHeaders = new HttpHeaders();
    return this.httpClient.post<any>('api/index.php', forms, {headers: httpHeaders}).subscribe(
      result => {
      }
    );
  }

  prepareUser(): any {
    const controls = this.formContact.controls;
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
