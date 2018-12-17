import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { UIService } from '../../shared/ui.service';
import { Exercise } from '../exercise.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;
  isLoading = false;
  loadingSub: Subscription;

  constructor(private trainingService: TrainingService,
    private uiService: UIService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisesChanged
      .subscribe(exercises => (this.exercises = exercises));
    this.loadingSub = this.uiService.loadingStateChange.subscribe(
      loading => this.isLoading = loading);

    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }

  onStartTraining(form: NgForm) {
    this.trainingService.exercisesChanged.subscribe();
    this.trainingService.startExercise(form.value.exercise);
  }

}
