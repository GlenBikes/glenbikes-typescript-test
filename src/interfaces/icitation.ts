export interface ICitation {
  [index: string]: any;
  id: string;
  license: string;
}

export class Citation implements ICitation {
  [index: string]: any;
  constructor(id: string, license: string) {
    this.id = id;
    this.license = license;
  }
  
  id: string;
  license: string;
}

