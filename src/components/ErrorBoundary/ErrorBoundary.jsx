import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  render() {
    // console.log(this.state.error)
    return this.state.error ? this.props.fallback : this.props.children;
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }
}

export default ErrorBoundary;
