import { TestBed } from '@angular/core/testing';

import { AppServicosService } from './app-servicos.service';

describe('AppServicosService', () => {
  let service: AppServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
