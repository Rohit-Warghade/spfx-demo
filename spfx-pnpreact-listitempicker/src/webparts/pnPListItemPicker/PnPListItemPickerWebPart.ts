import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PnPListItemPickerWebPartStrings';
import PnPListItemPicker from './components/PnPListItemPicker';
import { IPnPListItemPickerProps } from './components/IPnPListItemPickerProps';



export interface IPnPListItemPickerWebPartProps {
  listId: string;  
  columnInternalName: string;  
  itemLimit: number; 
}

export default class PnPListItemPickerWebPart extends BaseClientSideWebPart <IPnPListItemPickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPnPListItemPickerProps> = React.createElement(
      PnPListItemPicker,
      {
        listId: this.properties.listId,  
        columnInternalName: this.properties.columnInternalName,  
        itemLimit: this.properties.itemLimit,  
        context: this.context  
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Test'//"strings.PropertyPaneDescription"
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [  
                PropertyPaneTextField('listId', {  
                  label: strings.ListIdFieldLabel 
                }),  
                PropertyPaneTextField('columnInternalName', {  
                  label: strings.ColumnInternalNameFieldLabel  
                }),  
                PropertyPaneTextField('itemLimit', {  
                  label: strings.ItemLimitFieldLabel  
                })  
              ]  
            }
          ]
        }
      ]
    };
  }
}
