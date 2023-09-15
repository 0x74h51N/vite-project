import React from "react";

//Cleanup gerektirmeyen effectler
class useEffectlessness extends React.Component<{}, { count: number }> {
  constructor(props: {} | any) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `${this.state.count} kez tıklandı`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count} kez tıklandı`;
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Dıklat Kanks
        </button>
      </div>
    );
  }
}
export default useEffectlessness;
