import * as React from 'react';
import styles from './Upcoming.module.scss';
import { IUpcomingProps } from './IUpcomingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp/presets/all";
import App from './App';
export default class Upcoming extends React.Component<IUpcomingProps, {}> {
  constructor(prop: IUpcomingProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IUpcomingProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;



    return (
     <div>
        <App Title={this.props.Title}/>
     </div>
    );
  }
}
