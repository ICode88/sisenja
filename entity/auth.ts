import { Entity } from "./rest";

export interface LoginEntity extends Entity<{ token: string }> {}
