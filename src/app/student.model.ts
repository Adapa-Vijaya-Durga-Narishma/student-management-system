export interface Student {
  id: number;
  rollnumber: number;
  name: string;
  section: string;
  assessments: {
    type: string; // "quarterly", "halfyearly", "annually", etc.
    marks: {
      physics: number;
      chemistry: number;
      social: number;
    };
  }[];
}
