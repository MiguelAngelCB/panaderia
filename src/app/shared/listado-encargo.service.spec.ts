import { TestBed } from '@angular/core/testing';

import { ListadoEncargoService } from './listado-encargo.service';

describe('ListadoEncargoService', () => {
  let service: ListadoEncargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoEncargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
