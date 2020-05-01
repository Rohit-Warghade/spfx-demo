import { WebPartContext } from '@microsoft/sp-webpart-base';  
  
export interface IPnPListItemPickerProps {  
  listId: string;  
  columnInternalName: string;  
  itemLimit: number;  
  context: WebPartContext;  
}  
