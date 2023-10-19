import {Phone} from "./phone";
import {Email} from "./email";

export interface Contact {
  contactId: string;
  name: string;
  phones: Phone[];
  emails?: Email[];
  organization?: string;
}
