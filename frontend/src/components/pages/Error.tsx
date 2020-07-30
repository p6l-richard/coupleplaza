import React, {Component} from 'react';

export interface IErrorProps {
}

export default class Error extends Component<IErrorProps> {
  public render() {
    return (
      <div>
        Resource was not found.
      </div>
    );
  }
}
