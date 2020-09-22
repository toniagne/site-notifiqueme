import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
  .dark-modal .modal-dialog {
    max-width: 800px
  }
`]
})

/**
 * Index-3 component
 */
export class Index3Component implements OnInit {
  mensagem1 = false;
  mensagem2 = false;
  mensagem3 = false;
  content: any = [];
  currentSection = 'home';
  private browserLang: any;

  constructor(public modalService: NgbModal, public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['pt', 'en', 'es']);
    this.translate.setDefaultLang('pt');

    const m1 = interval(2000);
    const m2 = interval(4000);
    const m3 = interval(6000);
    const destroy = interval(14000);
    const reload = interval( 15000);
    m1.subscribe(val => this.mensagem1 = true);
    m2.subscribe(val => this.mensagem2 = true);
    m3.subscribe(val => this.mensagem3 = true);
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, { windowClass: 'dark-modal', centered: true });
  }


  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
