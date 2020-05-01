import * as React from 'react';
import styles from './PnPListItemPicker.module.scss';
import { IPnPListItemPickerProps } from './IPnPListItemPickerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ListItemPicker } from '@pnp/spfx-controls-react/lib/listItemPicker'; 

import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";  
import { DisplayMode } from '@microsoft/sp-core-library';  
import { Link } from 'office-ui-fabric-react/lib/Link'; 

export default class PnPListItemPicker extends React.Component<IPnPListItemPickerProps, {}> {
  public render(): React.ReactElement<IPnPListItemPickerProps> {  
    return (  
      <div>
        <WebPartTitle displayMode={this.props.displayMode}  
                title={this.props.description}  
                updateProperty={this.props.updateProperty}  
                moreLink={  
                  <Link href="https://sharepoint.github.io/sp-dev-fx-controls-react/">See all</Link>  
                } />  
      <div className={styles.pnPListItemPicker}>  
        <ListItemPicker listId={this.props.listId}  
          columnInternalName={this.props.columnInternalName}  
          keyColumnInternalName='Id'  
          itemLimit={this.props.itemLimit}  
          onSelectedItem={this.onSelectedItem}  
          context={this.props.context} />  
      </div>  
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
