import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { UserData } from '../models/Users';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GlobalStateService } from '../global-state.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [CommonModule, FormsModule, DatePipe],
  standalone: true,
})
export class ContactUsComponent {
  ourEmail: string = 'marketing@anarish.com';
  submitted: boolean = false;
  submissionSuccess = false;
  isLoading: boolean = false;
  

  userData: UserData = {
    name: '',
    email: '',
    phoneNumber: '',
    intrests: [],
    projectRequirements: '',
    date: '',
  };
  intrests = [
    { id: 1, option: 'UI-Design', value: false },
    { id: 2, option: 'Product Design', value: false },
    { id: 3, option: 'Frontend', value: false },
    { id: 4, option: 'Backend', value: false },
    { id: 5, option: 'Micro-site', value: false },
    { id: 6, option: 'UX Consultation', value: false },
    { id: 7, option: 'React Js', value: false },
  ];

  constructor(private appService: AppService, private globalState:GlobalStateService, private datePipe: DatePipe) {}


  ngOnInit() {
  
  }

  updateState() {
    this.globalState.setState({ stateSubject: true });

    // this.globalState.state$.subscribe(state => {
    //   console.log("state changed :", state);
    // });

  }

  onChange(intrest: any): void {
    intrest.value = !intrest.value;
  }

  submitHandler(form: NgForm) {
    this.isLoading = true;


    if (form.valid) {
      this.submitted = true;
      this.userData.intrests = this.intrests
        .filter((obj) => obj.value)
        .map((value) => value.option);

      let currentDate = new Date();

      let formattedDateTime =
        '' +
        this.datePipe.transform(currentDate, 'dd-MMM-yyyy') +
        ' ' +
        this.datePipe.transform(currentDate, 'HH:mm:ss');

      this.userData.date = formattedDateTime;
      this.appService.saveData(this.userData).subscribe(
        (data) => {
          console.log(data, ' : saved successfully');
          this.updateState();
          this.submissionSuccess = true;
          this.isLoading = false;
          this.submitted = false;

          setTimeout(() => {
            this.submissionSuccess = false;
          }, 5000);
        },
        (error) => {
          console.error('ERROR IN SAVING QUERY',error);
          this.isLoading = false;
          this.submitted = false;
        }
      );

      this.appService.sendMail(this.userData).subscribe(
        (data) => console.log(data),
        (error) => console.error(error)
      );

      form.reset();
      this.submitted = false;


    } else {
      this.submitted = true;
      this.isLoading = false;
    }


    this.intrests.forEach((interest) => (interest.value = false));
  }
}
