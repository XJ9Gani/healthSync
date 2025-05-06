type Gender = "Мужской" | "Женский";
type Role = "Пациент" | "Доктор";
type Appoint = {
  date: string;
  description: string;
  doctorId: string;
  doctorName: string;
};
export interface CurrentUserType {
  id: number;
  confirmPassword: string;
  dob: string;
  email: string;
  firstName: string;
  gender: Gender;
  lastName: string;
  password: string;
  phone: string;
  role: Role;
  appointments: Appoint[];
  medications: [
    {
      name: string;
      time: string;
      dosageCount: number;
      afterWhat: string;
    }
  ];
}
