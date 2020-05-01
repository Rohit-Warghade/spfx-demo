import * as React from 'react';
import styles from './GetSPlistitemsReact.module.scss';
import { IGetSPlistitemsReactProps } from './IGetSPlistitemsReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";

export interface IReactGetItemsState{
  items:[
        {
          "Title": "",
          "ContactNumber": "",
          "CompanyName":"",
          "Country":""
        }]
}


export default class GetSPlistitemsReact extends React.Component<IGetSPlistitemsReactProps, IReactGetItemsState> {

  public constructor(props: IGetSPlistitemsReactProps, state: IReactGetItemsState){
    super(props);
    
    this.state = {
     
      items: [
        {
          "Title": "",
          "ContactNumber": "",
          "CompanyName":"",
          "Country":""
        }
      ]
    };
  }

  public componentDidMount(){
   
    var reactHandler = this;
    jquery.ajax({
        url: `${this.props.currentsiteurl}/_api/web/lists/getbytitle('Contactlist')/items`,
        type: "GET",
        headers:{'Accept': 'application/json; odata=verbose;'},
        success: function(resultData) {
          reactHandler.setState({
            items: resultData.d.results
          });
        },
        error : function(jqXHR, textStatus, errorThrown) {
        }
    });
  }

  public render(): React.ReactElement<IGetSPlistitemsReactProps> {

    const viewFields: IViewField[] = [
      {
        name: 'Title',
        displayName: 'Title',
        sorting: true,
        maxWidth: 80
      },
      
      {
        name: 'ContactNumber',
        displayName: 'Contact Number',
        sorting: true,        
        maxWidth: 120
      },
      {
        name: 'CompanyName',
        displayName: "Company Name",
        sorting: true,
        maxWidth: 100
      },
      {
        name: 'Country',
        displayName: "Country",
        sorting: true,
        maxWidth: 80
      }      
    ];
     
    return (
      <ListView
      items={this.state.items}
      viewFields={viewFields}
      compact={true}
      selectionMode={SelectionMode.multiple}
      selection={this._getSelection}
       />
    );
}

  private _getSelection(items: any[]) {
    console.log('Selected items:', items);
  }

  
}
