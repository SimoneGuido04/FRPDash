export interface Services {

  http: Service[]
  https: Service[]
  tcp: Service[]
  tcpmux: Service[]
  stcp: Service[]
  xtcp: Service[]
  udp: Service[]

}



export interface Service {

  name : string;
  type : string;
  status : string;
  err : string;
  local_addr : string;
  plugin : string;
  remote_addr : string;

}
