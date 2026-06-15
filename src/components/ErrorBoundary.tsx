import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

// Catches render-time errors so a thrown component shows a graceful fallback
// instead of a blank white page.
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface in the console for debugging; no third-party reporting.
    console.error("Unhandled UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <h1>Something went wrong.</h1>
            <p style={{ margin: "16px 0 24px", color: "var(--grey)" }}>
              Please refresh the page — if it keeps happening, get in touch and we'll fix it.
            </p>
            <a href="/" className="btn btn-primary">
              Back to home
            </a>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
