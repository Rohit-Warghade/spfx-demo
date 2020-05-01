import * as React from 'react';
import styles from './PnPListItemPicker.module.scss';
import { IPnPListItemPickerProps } from './IPnPListItemPickerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ListItemPicker } from '@pnp/spfx-controls-react/lib/listItemPicker'; 

export default class PnPListItemPicker extends React.Component<IPnPListItemPickerProps, {}> {
  public render(): React.ReactElement<IPnPListItemPickerProps> {  
    return (  
      <div className={styles.pnPListItemPicker}>  
        <ListItemPicker listId={this.props.listId}  
          columnInternalName={this.props.columnInternalName}  
          keyColumnInternalName='Id'  
          itemLimit={this.props.itemLimit}  
          onSelectedItem={this.onSelectedItem}  
          context={this.props.context} />  
      </div>  
    );  
  }  

  private onSelectedItem(data: { key: string; name: string }[]) {  
    for (const item of data) {  
      console.log(`Item value: ${item.key}`);  
      console.log(`Item text: ${item.name}`);  
    }  
  }    
}
