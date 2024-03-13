export type EmployeeType = {
  employeeOccupation: string;
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletion: boolean;
  safetyTrainingCompletionDate?: string | null;
};

export type EmployeeMethods = {
  enterZoo(): void;
  leaveZoo(): void;
  takeSafetyTrainings(): void;
};
