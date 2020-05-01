import { WebPartContext } from '@microsoft/sp-webpart-base';  
import { DisplayMode } from '@microsoft/sp-core-library'; 
export interface IPnPListItemPickerProps {  
  listId: string;  
  columnInternalName: string;  
  itemLimit: number;  
  context: WebPartContext ; 
  description:string; 
  displayMode:DisplayMode;
  updateProperty: (value: string) => void; 
}  
