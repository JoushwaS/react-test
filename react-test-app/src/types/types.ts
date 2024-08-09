// types.ts
export interface Step1Values {
  name: string;
  email: string;
}

export interface Step2Values {
  age: number;
  gender: string;
}

export interface Step3Values {
  address: string;
  city: string;
}

export interface FormValues {
  step1: Step1Values;
  step2: Step2Values;
  step3: Step3Values;
}
