import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {ContactDialogComponent} from '../dialogs/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private userFB: FormBuilder,
    public modalService: NgbModal,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formGroup = this.userFB.group({
      name: [''],
      phone: [''],
      email: [''],
      city: [''],
      address: [''],
    });
  }

  sendMail(formValues){
    this.modalService.dismissAll();

    this.send(this.prepareUser());
  }

  loginModal(content) {
    this.modalService.open(content, { centered: true });
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
    const controls = this.formGroup.controls;
    // tslint:disable-next-line:variable-name
    const _contact: any = [];
    _contact.name = controls.name.value;
    _contact.phone = controls.phone.value;
    _contact.email = controls.email.value;
    _contact.city = controls.city.value;
    _contact.address = controls.address.value;
    return _contact;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.sendMail({
          formData: {
            name: result.name,
            email: result.email,
            phone: result.phone,
            subject: result.subject,
            message: result.message
          }
        });
      }
    });
  }
}
