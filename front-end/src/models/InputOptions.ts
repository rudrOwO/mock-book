export class InputOptions {
  label: string;
  type: "text" | "password";
  name: "firstname" | "lastname" | "email" | "password";
  isRequired: boolean;

  constructor(
    label: string,
    type: "text" | "password",
    name: "firstname" | "lastname" | "email" | "password",
    isRequired: boolean = true
  ) {
    this.label = label;
    this.type = type;
    this.name = name;
    this.isRequired = isRequired;
  }
}
