import { createAction, props } from '@ngrx/store';

export const addCountry = createAction(
  '[Visited Countries] Add Country',
  props<{ country: string }>()
);

// Add other actions as needed
