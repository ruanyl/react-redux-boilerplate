import * as React from 'react'
const styles = require('./MyComponent.css')

export class MyComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <div className={styles.myComponent}>Hello world</div>
  }
}
