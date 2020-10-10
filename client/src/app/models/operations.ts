import { Type } from '@angular/core';

export interface Operation {
  id?: number;
  concept?: string;
  amount?: number;
  type?: string;
  id_category?: number;
  id_user?: number;
  date?: Date;
}
