import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DescriptionComponent} from '../../description/description.component';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {
  contactFormGroup: FormGroup;
  hasFormErrors = false;
  constructor(
    public dialogRef: MatDialogRef<DescriptionComponent>,
    private userFB: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.contactFormGroup = this.userFB.group({
      name: ['', Validators.required],
      phone: ['', Validators.required, Validators.minLength(8)],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.hasFormErrors = false;
    const controls = this.contactFormGroup.controls;

    if (this.contactFormGroup.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      this.hasFormErrors = true;
      return;
    }
    this.dialogRef.close(this.prepareUser());
  }

  prepareUser(): any {
    const controls = this.contactFormGroup.controls;
    // tslint:disable-next-line:variable-name
    const _services: any = [];
    _services.name = controls.name.value;
    _services.email = controls.email.value;
    _services.phone = controls.phone.value;
    _services.subject = controls.subject.value;
    _services.message = controls.message.value;
    return _services;
  }

}
