declare function validate(
  schema: validate.ValidateSchemaParams,
  opts?: any
): validate.ValidateSchema;

declare namespace validate {
  export interface ValidateKeyOpts {
    required?: boolean;
    type?: string;
    message?: string;
    match?: RegExp;
  }

  export interface ValidateSchemaParams {
    [key: string]: ValidateKeyOpts | ValidateSchemaParams;
  }

  export interface ValidateSchema {
    assert(obj: any, opts?: any): void;
    validate(obj: any, opts?: any): string[];
  }
}
