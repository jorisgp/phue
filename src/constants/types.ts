export interface Service {
  name: string;
  fullName: string;
  addresses: string[];
  host: string;
  port: number;
  txt: {
    [key: string]: any;
  };
}
