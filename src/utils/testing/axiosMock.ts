import { AxiosStatic } from 'axios';

export interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockRejectedValue: Function;
  mockImplementation: Function;
  mockClear: Function;
}
