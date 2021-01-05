import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, StatesService, TravelsService } from '@app/core';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent implements OnInit {
  form: FormGroup;
  states: State[];
  submitted = false;

  constructor(
    private stateService: StatesService,
    private formBuilder: FormBuilder,
    private travelService: TravelsService) { }

  ngOnInit(): void {
    this.setForm();

    this.stateService
      .getStatesList()
      .subscribe(r => this.states = r)
  }

  get f() {
    return this.form.controls;
  }

  setForm(): void {
    if (this.form) {
      this.form.reset({ state: '', startDate: '', endDate: '', note: '' })
      return;
    }

    this.form = this.formBuilder.group({
      state: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      note: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.travelService.addTravel({
      state: this.f.state.value,
      startDate: this.f.startDate.value,
      endDate: this.f.endDate.value,
      note: this.f.note.value
    })

    this.submitted = false;
    this.setForm();
  }
}
