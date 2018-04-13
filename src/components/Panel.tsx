import * as React from 'react';
import { IPanel } from '../interfaces/Interface';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

class PanelComp extends React.Component<IPanel, {
    showPanel: boolean;
  }> {

  constructor (props: IPanel) {
    super (props);
    this.state = { 
        showPanel: false 
    };
  }

  render() {
    return (
      <div>

        <Panel
          isOpen={this.state.showPanel}
          isHiddenOnDismiss={true}
          type={PanelType.smallFixedNear}
          // tslint:disable-next-line jsx-no-lambda
          onDismiss={() => this.setState({ showPanel: false })}
          headerText="INFO"
        >
        {/* tslint:disable-next-line jsx-no-lambda */}
        <DefaultButton text="SAVE" onClick={() => this.setState({ showPanel: false})}/>

        </Panel>
      </div>
    );
  }
}

export default PanelComp;